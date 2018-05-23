<template>
  <div class="tab-introduction">
    <div class="introduce" :style="{'height':introduceheight}">{{msg}}</div>
  </div>
</template>

<script>
export default {
  name: 'Introduction',
  data () {
    return {
      msg: '我是详情介绍',
      introduceheight: document.documentElement.clientWidth/ 1920 * 760 + "px"
    }
  },
  created:function(){
    
  },
  mounted () {
    var _this = this;
    window.addEventListener("resize",function(){
      var val = document.documentElement.clientWidth;
      _this.introduceheight = val / 1920 * 760 + "px";
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tab-introduction{
  width: 100%;
  height: auto;
  background: #09b6f2;
  color: #333;
}
.introduce{
  width: 100%;
  background: url("../../assets/introduce.png") left top no-repeat;
  background-size: cover;
}
</style>