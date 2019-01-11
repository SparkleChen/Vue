<template>
  <div>
    <div class="ball-container">
        <transition-group name="drop" @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
          <div class="ball" v-for="ball of balls" :key="ball.index" :index="ball.index" v-if="ball.show">
            <div class="inner inner-hook"></div>
          </div>
        </transition-group>
    </div>
    <div class="shape" @click="hanldeClick"></div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      num: 0,
      balls: [{
        show: false,
        index:'0'
      },{
        show: false,
        index:'1'
      },{
        show: false,
        index:'2'
      },{
        show: false,
        index:'3'
      },{
        show: false,
        index:'4'
      }],
      dropBalls:[]
    }
  },
  methods: {
    hanldeClick (e) {
      for(let i=0;i<this.balls.length;i++){
        let ball = this.balls[i];
        if(!ball.show){
            ball.show = true;
            ball.el = e.target;
            this.dropBalls.push(ball);
            return;
        }
      }
    },
    beforeEnter(el) {
      let conunt = this.balls.length;
      while(conunt--) {
        let currentBall = this.balls[conunt];
        if(currentBall.show){
          let rect = currentBall.el.getBoundingClientRect();
          let x = rect.left - 10;
          let y = -(window.innerHeight - rect.top - 10);
          el.style.display = 'inherit';
          el.style.transform = `translate3d(0,${y}px,0)`;
          el.getElementsByClassName('inner-hook')[0].style.transform = `translate3d(${x}px,0,0)`;
        } 
      }
    },
    enter(el, done){
      //重绘之后transform才有用
      let rf = el.offsetHeight;
      this.$nextTick(()=>{
        el.style.transform = 'translate3d(0,0,0)';
        el.getElementsByClassName('inner-hook')[0].style.transform = 'translate3d(0,0,0)';
        el.addEventListener('webkitTransitionEnd',done);
      });
    },
    afterEnter(el){
      let ball = this.dropBalls.shift();
      if(ball){
         ball.show = false;
         el.style.display = 'none';
      }
    }
  }
}
</script>

<style>
.ball {
  position:fixed;
  bottom:10px;
  left:10px;
}
.drop-enter-active {
  transition: all .5s cubic-bezier(.59,-1,1,1.35);
}
.ball .inner {
  width:10px;
  height:10px;
  background-color:green;
  border-radius: 50%;
  transition: all .5s linear;
}
.shape{
  position: absolute;
  top:200px;
  right:10px;
  width:10px;
  height:10px;
  background-color:blue;
  border-radius: 30%;
}
</style>


