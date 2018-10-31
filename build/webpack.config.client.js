const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require('webpack')
const merge = require('webpack-merge')
const ExtractPlugin = require('extract-text-webpack-plugin')
const baseConfig = require('./webpack.config.base')
const isDev = process.env.NODE_ENV === 'development'
const devServer = {
    port: 8000,
    host: '0.0.0.0',
    overlay: {
      errors: true,
    },
    hot: true
  }
const defaultPlugins = [
    new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: isDev ? '"development"' : '"production"'
        }
      }),
      new HTMLPlugin(),
      new VueLoaderPlugin()
]
let config

if (isDev) {
 config = merge(baseConfig,{
     devtool: '#cheap-module-eval-source-map',
     module: {
         rules:[
            {
                test: /\.styl/,
                use: [
                  'vue-style-loader',
                  'css-loader',
                  {
                    loader: 'postcss-loader',
                    options: {
                      sourceMap: true,
                    }
                  },
                  'stylus-loader'
                ]
              }
         ]
     },
     devServer: devServer,
     plugins:defaultPlugins.concat([
        new webpack.HotModuleReplacementPlugin()
     ])
 })
} else {
    config = merge(baseConfig,{
        entry: {
            app: path.join(__dirname, '../client/index.js')
          },
        output:{
            filename: '[name].[chunkhash:8].js'
          },
        module: {
            rules:[
                {
                    test: /\.styl/,
                    use: ExtractPlugin.extract({
                      fallback: 'vue-style-loader',
                      use: [
                        'css-loader',
                        {
                          loader: 'postcss-loader',
                          options: {
                            sourceMap: true,
                          }
                        },
                        'stylus-loader'
                      ]
                    })
                  }
            ]
        },
        optimization:{
          splitChunks:{
            chunks:'all'
          },
          runtimeChunk:true
        },
        plugins:defaultPlugins.concat([
            new ExtractPlugin('styles.[hash:8].css')
        ])
    })
}

module.exports = config
