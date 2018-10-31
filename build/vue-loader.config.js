module.exports = (isDev) => {
    return {
        //页面空格处理
        preserveWhitepace:true,
        //抽离vue文件中的css样式
        extractCSS: !isDev,
        //cssModules:{}
    }
}