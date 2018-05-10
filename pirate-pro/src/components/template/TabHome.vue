<template>
  <div class="tab-home">
    <div class="introduce" :style="{'height':introduceheight}">{{msg}}</div>
    <div class="players" :style="{'height':playersheight}">{{msg}}</div>
  </div>
</template>

<script>
export default {
  name: 'TabHome',
  data () {
    return {
      msg: '我是TabHome',
      introduceheight: '',
      playersheight: ''
    }
  },
  created:function(){
    
  },
  mounted:function(){
    var screenwidth = document.documentElement.clientWidth;
    this.introduceheight = screenwidth / 1910 * 824 + "px";
    this.playersheight = screenwidth / 1910 * 821 + "px";
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tab-home{
  width: 100%;
  height: auto;
  color: #fff;
}
.introduce{
  width: 100%;
  background: url("../../assets/introduce.png") left top no-repeat;
  background-size: cover;
}
.players{
  width: 100%;
  background: url("../../assets/players.png") left top no-repeat;
  background-size: cover;
}
</style>