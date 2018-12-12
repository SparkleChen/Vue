<template>
  <div id="app">
   <div class="header">
     <div class="nav-left-warpper">
      <a href="" class="nav-react">
        <span class="nav-city">重庆</span> 
      </a> 
     </div>
     <div class="box-search">
        <span class="single-line">输入商家/品类/商圈</span>
     </div>
     <div class="nav-right-wrapper">
       <a href="" class="nav-react">
          <span class="nav-my">我的</span>
       </a>
     </div>
   </div>
   <div class="banner">
     <img src="//ms0.meituan.net/touch/img/download_banner.png" alt="" class="banner-img">
   </div>
   <div class="list">
     <ul>
       <li class="list-item" v-for="item of [1,2,3,4,5,6,7,9,91,23]" :key="item">
         <a class="item-link" href="">
            <span class="icon"></span>
            <span class="txt">猫眼电影</span>
         </a>
       </li>
     </ul>
     <ul class="list-dot">
       <li class="list-dot-item" v-for="item of [1,2]" :key="item"></li>
     </ul>
   </div>
   <div class="guess-like">
     <div class="guess-wrapper">
      <p class="guess-title">猜你喜欢</p>
      <div class="guess-product-list">
        <div class="guess-item" v-for="item of [1,2,3,4]" :key="item">
          <img class="guess-img" src="//p0.meituan.net/200.0/deal/11223701c2d418cbb5a9162adccd8ea090904.jpg"/>
          <div class="guess-detial-wrapper">
            <p class="title">十分工坊 香酥饼</p>
            <p class="description">[观音桥] 猪肉馅饼2选1</p>
            <div class="price">
              <span>3.8元</span>
              <span>门市价：5元</span>
              <span>已售17579</span>
            </div>
          </div>
        </div>
      </div>
     </div>
   </div>
  </div>
</template>

<script>
export default {
  name: 'HomeCss',
  data () {
    return {
      name: 1
    }
  }
}
</script>

<style lang="stylus" scoped>
  .header
    width: 100%
    height: 102px
    background: #06c1ae
    position: relative
    border-bottom: 1px solid #21897d
    box-sizing: border-box
    font-size: 0px
    .nav-left-warpper
      height: 101px
      display: inline-block
      a 
        text-decoration: none;
        outline: 0;
      .nav-react
        height: 100%
        display: block
        .nav-city
          line-height: 102px
          text-align: center
          margin: 0 20px
          font-size: 32px
          color: #fff
          font-family: "Helvetica Neue",Helvetica,Arial,sans-serif
    .box-search
      width: 517px
      height: 64px
      line-height: 64px
      display: inline-block
      margin: 20px 40px 0px 40px
      border-radius: 6px
      background: rgba(0,0,0,.15)
      font-size: 26px
      color: #68dbce
      .single-line
        padding-left: 60px
    .nav-right-wrapper
      height: 101px
      line-height: 101px
      display: inline-block
      vertical-align: top 
      a 
        text-decoration: none
        outline: 0; 
        .nav-my
          font-size: 20px 
          color: #fff   
  .banner
    .banner-img
      width: 100%
  .list
    border-top: 1px solid black   
    width: 100%
    height: 361px 
    .list-item
      display: inline-block
      padding: 20px 0px
      .item-link
        display: block
        text-decoration: none
        outline: 0; 
        .icon
          width: 90px
          height: 90px
          display: inline-block
          margin: 0px 53px 14px 53px
          background-color: black
        .txt
          display: block
          text-align: center
    .list-dot
      text-align: center      
      .list-dot-item
        width: 16px
        height: 16px
        display: inline-block
        margin: 0px 15px
        border-radius: 50%
        background-color: #06c1ae 
  .guess-like
    width: 100%
    margin-top: 20px
    border-bottom: 1px solid black 
    .guess-wrapper
      padding-left: 30px
      .guess-title
        font-size: 34px
        padding: 28px 0px
      .guess-product-list
        .guess-item
          padding: 28px 20px 28px 0px
          border-top: 1px solid black
          .guess-img
            position: absolute
          .guess-detial-wrapper
            width: 720px
            height: 200px
            margin-left: 210px
            position: relative
            display:inline-block
            .title
              padding: 12px 0px
              font-size: 30px
            .description
              height: 68px
              padding-bottom: 16px
              font-size: 24px
              color: #666
            .price
              span:nth-child(1)
                font-size: 38px
                color: #06c1ae
              span:nth-of-type(2)
                font-size: 24px
              span:last-child
                position: absolute
                right: 0px
                font-size: 24px
                color: #666
</style>


