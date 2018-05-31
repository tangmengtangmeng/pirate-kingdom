<template>
    <div class="tab-presale">
      <div class="addbox" v-show="!showheader.showheader" :style="{'height':addheight}"></div>
      <div class="players" :style="{'height':playersheight}">
        <div class="topright">
          <div class="row">
            <div class="col-40" @click="login"><p class="text-left">{{username.username}}</p></div>
            <div class="col-60"><p class="text-right" @click="myassets">My assets</p></div>
          </div>
        </div>
        <div class="pretitle" :style="{'height':titleheight}"></div>
        <ul class="preplayer" :style="{'height':playerheight}">
          <li v-for="n in 3"><div @mouseenter="light($event)" @mouseleave="none($event)" @click="detail(n)"><div></div></div></li>
        </ul>
        <ul class="prebtn" :style="{'height':btnheight}">
          <li v-for="n in 3"><div @click="confirmbuycard(n)" :style="{'height':divheight}"></div></li>
        </ul>
        <div class="sale" v-show="showpopup">
          <div class="shadow">
            <bigPopup :bigpopup-buymsg="buymsg"></bigPopup>
          </div>
        </div>
      </div>
      <div class="addbox" v-show="!showfooter.showfooter" :style="{'height':addheight}"></div>
    </div>
</template>

<script>

export default {
  name: 'Presale',
  data () {
    return {
      screenwidth: document.documentElement.clientWidth,
      addheight: "",
      playersheight: "",
      titleheight: "",
      playerheight: "",
      btnheight: "",
      divheight: "",
      buymsg: {},
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
    },
    confirmbuycard: function (i) {
      this.$store.dispatch("showbigpopup",{confirmbuycard:true,player:i});
      this.buymsg = {confirmbuycard:true,player:i};
    },
    login: function () {
      if(this.$store.state.username.indexOf("login") > -1){
        this.service.login();
      }else{
        this.$store.dispatch("showbigpopup");
        this.buymsg = {setnickname:true};
      }
    },
    detail: function (i) {
      this.$store.dispatch("showbigpopup",{buycard:true,player:i});
      this.buymsg = {buycard:true,player:i};
    },
    myassets: function () {
      this.service.myassets();
      this.$store.dispatch("showbigpopup");
      this.buymsg = {myassets:true};
    }
  },
  created:function(){
    console.log("高度",this.playersheight);
  },
  mounted:function(){
    if(document.documentElement.clientWidth > 1680){
      this.addheight = 0;
      this.playersheight = "100%";
      this.titleheight = "24.5%";
      this.playerheight = "63.3%";
      this.btnheight = "12%";
      this.divheight = "76%";
    }else{
      this.addheight = ((document.documentElement.clientHeight) - (document.documentElement.clientWidth)/ 1920 * 1080)/2 + "px";
      this.playersheight = (document.documentElement.clientWidth)/ 1920 * 1080 + "px";
    }

    var _this = this;
    window.addEventListener("resize",function(){
        console.log("缩放lllll")
        var val = document.documentElement.clientWidth;
        var val2 = document.documentElement.clientHeight;
        if(document.documentElement.clientWidth > 1680){
          _this.addheight = 0;
          _this.playersheight = "100%";
          _this.titleheight = "24.5%";
          _this.playerheight = "63.3%";
          _this.btnheight = "12%";
          _this.divheight = "76%";
        }else{
          _this.addheight = ((document.documentElement.clientHeight) - (document.documentElement.clientWidth)/ 1920 * 1080)/2 + "px";
          _this.playersheight = (document.documentElement.clientWidth)/ 1920 * 1080 + "px";
          _this.titleheight = "22.2%";
          _this.playerheight = "57.4%";
          _this.btnheight = "20%";
          _this.divheight = "45.2%";
        }
    })
  },
  computed: {
    showheader () {
      return {
        showheader:this.$store.state.showheader
      }
    },
    showfooter () {
      return {
        showfooter:this.$store.state.showfooter
      }
    },
    username () {
      return {
        username:this.$store.state.username.slice(0,6)
      }
    },
    showpopup () {
      return this.$store.state.showbigpopup
    }
  },
  watch: {
    screenwidth () {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sale{
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 5;
}
.shadow{
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.4);
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 10;
}
.tab-presale{
  width: 100%;
  height: auto;
  color: #fff;
  background: black;
}
@media all and (min-width: 1680px){
  .tab-presale{
    height: 100%;
  }
}
.players{
  width: 100%;
  background: url("../../assets/presale.png") center center no-repeat;
  background-size: 100% 100%;
}
.pretitle{
  width: 46.9%;
  height: 22.2%;
  margin: 0 auto;
  background:url("../../assets/pretitle.png") center center no-repeat;
  background-size: 100% 100%; 
}
.topright{
  width: 11.2%;
  min-width: 156px;
  height: 5.6%;
  float: right;
  background:url("../../assets/moresetting.png") center center no-repeat;
  background-size: 100%;
  margin-top: 1.3%;
  margin-right: 5.2%;
}
.topright>div{
  width: 81.4%;
  min-width: 126px;
  height:100%;
  padding: 0 9%;
  box-sizing: border-box;
}
.topright>div>div:hover{
  cursor: pointer;
}
.topright>div>div>p{
  width: 100%;
  font-size: 13px;
  color: rgb(149,139,114);
}
@media all and (min-width: 1200px){
  .topright>div>div>p{
    font-size: 14px;
  }
}
@media all and (min-width: 1600px){
  .topright>div>div>p{
    font-size: 15px;
  }
}
@media all and (min-width: 1800px){
  .topright>div>div>p{
    font-size: 16px;
  }
}
.preplayer,.prebtn{
  width:64%;
  height: 57.4%;
  margin: 0 auto; 
}
.preplayer li,.prebtn li{
  height: 100%;
  float: left;
}
.preplayer li:nth-child(1){
  width: 33%;
  background:url("../../assets/player1.png");
  background-size: 100% 100%; 
}
.preplayer li:nth-child(2){
  width: 34%;
  background:url("../../assets/player2.png");
  background-size: 100% 100%; 
}
.preplayer li:nth-child(3){
  width: 33%;
  background:url("../../assets/player3.png");
  background-size: 100% 100%; 
}
.prebtn{
  height: 20%;
}
.prebtn>li{
  width: 33.33%;
}
.prebtn>li>div{
  width: 100%;
  height: 45.2%;
  margin:0 auto;
}
.prebtn>li>div:hover{
  cursor: pointer;
}
.prebtn li:nth-child(1) div{
  background:url("../../assets/player1b.png");
  background-size: 100% 100%; 
}
.prebtn li:nth-child(2) div{
  background:url("../../assets/player2b.png");
  background-size: 100% 100%; 
}
.prebtn li:nth-child(3) div{
  background:url("../../assets/player3b.png");
  background-size: 100% 100%; 
}
.preplayer li div{
  width: 70%;
  height: 77%;
  margin: 25% 9%;
  position: relative;
  top: 10px;
  left: 20px;
  z-index: 2;
  background:transparent;
  overflow: hidden; 
}
.preplayer li:nth-child(3) div{
  margin:25% 10%;
}
.preplayer li div div{
  width: 200%;
  height: 9%;
  margin: 0;
  position: relative;
  top: -3.1%;
  left: 6.2%;
  z-index: 3;
  background:linear-gradient(0deg,rgba(250,220,150,0),rgba(250,220,150,0.3),rgba(250,220,150,0));
  transform: rotate(45deg);
}
.preplayer li div div.light{
  width: 200%;
  height: 9%;
  margin: 0;
  position: relative;
  top: 110%;
  left: -120%;
  z-index: 3;
  background:linear-gradient(0deg,rgba(250,220,150,0),rgba(250,220,150,0.3),rgba(250,220,150,0));
  transform: rotate(45deg);
  transition: all .5s linear;
}
</style>