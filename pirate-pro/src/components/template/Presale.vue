<template>
  <div class="tab-presale">
    <div class="players" :style="{'height':playersheight}">
      {{$t("message.tabhome")}}
      <div class="pretitle"></div>
      <ul class="preplayer">
        <li><div @mouseenter="light($event)" @mouseleave="none($event)"><div></div></div></li>
        <li><div @mouseenter="light($event)" @mouseleave="none($event)"><div></div></div></li>
        <li><div @mouseenter="light($event)" @mouseleave="none($event)"><div></div></div></li>
      </ul>
      <ul class="prebtn">
        <li></li><li></li><li></li>
      </ul>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Presale',
  data () {
    return {
      playersheight: document.documentElement.clientWidth/ 1920 * 950 + "px",
    }
  },
  methods: {
    light: function (e) {
      var div = e.target;
      div.getElementsByTagName("div")[0].classList.add("light");
    },
    none: function (e) {
      var div = e.target;
      div.getElementsByTagName("div")[0].classList.remove("light");
    }
  },
  created:function(){
    
  },
  mounted:function(){
    var _this = this;
    window.addEventListener("resize",function(){
      var val = document.documentElement.clientWidth;
      _this.playersheight = val / 1920 * 950 + "px";
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tab-presale{
  width: 100%;
  height: auto;
  color: #fff;
}
.players{
  width: 100%;
  background: url("../../assets/presale.png") left top no-repeat;
  background-size: 100% 100%;
}
.pretitle{
  width: 38%;
  height: 22.1%;
  margin: 0 auto;
  background:url("../../assets/pretitle.png") center center no-repeat;
  background-size: 100% 100%; 
}
.preplayer,.prebtn{
  width:66.25%;
  height: 57.37%;
  margin: 0 auto; 
}
.preplayer li,.prebtn li{
  width: 33.33%;
  height: 100%;
  float: left;
}
.preplayer li:nth-child(1){
  background:url("../../assets/player1.png");
  background-size: 100% 100%; 
}
.preplayer li:nth-child(2){
  background:url("../../assets/player2.png");
  background-size: 100% 100%; 
}
.preplayer li:nth-child(3){
  background:url("../../assets/player3.png");
  background-size: 100% 100%; 
}
.prebtn{
  height: 16.31%;
}
.prebtn li:nth-child(1){
  background:url("../../assets/player1b.png");
  background-size: 100% 100%; 
}
.prebtn li:nth-child(2){
  background:url("../../assets/player2b.png");
  background-size: 100% 100%; 
}
.prebtn li:nth-child(3){
  background:url("../../assets/player3b.png");
  background-size: 100% 100%; 
}
.preplayer li div{
  width: 70%;
  height: 90%;
  margin: 5% 9%;
  position: relative;
  top: 10px;
  left: 20px;
  z-index: 2;
  background:transparent;
  overflow: hidden; 
}
.preplayer li div div{
  width: 200%;
  height: 9%;
  margin: 0;
  position: relative;
  top: -10px;
  left: 20px;
  z-index: 3;
  background:linear-gradient(0deg,rgba(250,220,150,0),rgba(250,220,150,0.3),rgba(250,220,150,0));
  transform: rotate(45deg);
}
.preplayer li div div.light{
  width: 200%;
  height: 9%;
  margin: 0;
  position: relative;
  top: 410px;
  left: -270px;
  z-index: 3;
  background:linear-gradient(0deg,rgba(250,220,150,0),rgba(250,220,150,0.3),rgba(250,220,150,0));
  transform: rotate(45deg);
  transition: all .5s linear;
}
</style>