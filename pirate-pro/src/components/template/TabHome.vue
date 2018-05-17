<template>
  <div class="tab-home">
    <div class="players" :style="{'height':playersheight}">{{msg}}</div>
    <div class="introduce" :style="{'height':introduceheight}">{{msg}}</div>
  </div>
</template>

<script>
export default {
  name: 'TabHome',
  data () {
    return {
      msg: this.$t("message.tabhome"),
      introduceheight: document.documentElement.clientWidth/ 1910 * 760 + "px",
      playersheight: document.documentElement.clientWidth/ 1910 * 880 + "px"
    }
  },
  created:function(){
    
  },
  mounted:function(){
    var _this = this;
    window.addEventListener("resize",function(){
      var val = document.documentElement.clientWidth;
      _this.introduceheight = val / 1910 * 760 + "px";
      _this.playersheight = val / 1910 * 880 + "px";
      console.log("homeHeight",_this.playersheight);
    })
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