<template>
    <div class="tab-presale">
      <div class="addbox" v-show="!showheader.showheader" :style="{'height':addheight}"></div>
      <div class="players" :style="{'height':playersheight}">
        <div class="topright">
          <div class="row">
            <div class="col-40" @click="login"><p class="text-left">{{username.username}}</p></div>
            <div class="col-60"><p class="text-right" @click="myassets">My Assets</p></div>
          </div>
        </div>
        <div class="pretitle" :style="{'height':titleheight}"></div>
        <ul class="preplayer" :style="{'height':playerheight}">
          <li v-for="(carditem,index) in carditems">
            <div class="soldamount">{{carditem.soldamount}}/{{carditem.totalamount}}</div>
            <div @mouseenter="light($event)" @mouseleave="none($event)" @click="detail(index + 1)"><div></div></div>
          </li>
        </ul>
        <ul class="prebtn" :style="{'height':btnheight}">
          <li v-for="(btnitem,index) in btnitems"><div @click="confirmbuycard(index + 1)" :style="{'height':divheight}" v-bind:class="{'clickbg':clicked[index]}" @mousedown="btndown(index)"><div>{{btnitem.price}}ETH</div></div></li>
        </ul>
        <div class="sale" v-show="showbigpopup">
          <div class="shadow">
            <bigPopup :bigpopup-buymsg="buymsg"></bigPopup>
          </div>
        </div>
        <div class="alert" v-show="showsmallpopup">
          <div class="shadow">
            <smallPopup :smallpopup-msg="alertmsg"></smallPopup>
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
      buymsg: this.$store.state.buymsg,
      alertmsg: this.$store.state.alertmsg,
      btnitems: this.$store.state.pricearr,
      carditems: this.$store.state.cardarr,
      clicked: this.$store.state.btnclicked,
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
      this.$store.state.buymsg.confirmbuycard = true;
      this.$store.state.buymsg.player = i;
    },
    btndown: function (i) {
      this.$store.state.btnclicked[0] = false;
      this.$store.state.btnclicked[1] = false;
      this.$store.state.btnclicked[2] = false;
      this.$store.state.btnclicked[i] = true;
    },
    login: function () {
      if(this.$store.state.username.indexOf("Login") > -1){
        this.service.login();
      }else{
        this.service.setnickname();
      }
    },
    detail: function (i) {
      this.$store.dispatch("showbigpopup",{buycard:true,player:i});
      this.$store.state.buymsg.buycard = true;
      this.$store.state.buymsg.player = i;
    },
    myassets: function () {
      this.service.myassets();
    }
  },
  created:function(){
    console.log("预售栏目的高度是：",this.playersheight);
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
        console.log("缩放");
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
        username:this.$store.state.username
      }
    },
    showbigpopup () {
      return this.$store.state.showbigpopup
    },
    showsmallpopup () {
      return this.$store.state.showsmallpopup
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
.sale,.alert{
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
  background: rgba(0,0,0,.2);
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
  background: url("/static/image/presale.png") center center no-repeat;
  background-size: 100% 100%;
}
.pretitle{
  width: 46.9%;
  height: 22.2%;
  margin: 0 auto;
  background:url("/static/image/pretitle.png") center center no-repeat;
  background-size: 100% 100%; 
}
.topright{
  width: 11.2%;
  min-width: 156px;
  height: 5.6%;
  float: right;
  background:url("/static/image/moresetting.png") center center no-repeat;
  background-size: 100%;
  margin-top: 1.3%;
  margin-right: 5.2%;
}
.topright>div{
  width: 81.4%;
  min-width: 126px;
  height:100%;
  padding: 0 7%;
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
  background:url("/static/image/player1.png");
  background-size: 100% 100%; 
}
.preplayer li:nth-child(2){
  width: 34%;
  background:url("/static/image/player2.png");
  background-size: 100% 100%; 
}
.preplayer li:nth-child(3){
  width: 33%;
  background:url("/static/image/player3.png");
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
  text-align: center;
  font-size: 24px;
  color: rgb(254,238,0);
  display: table;
  padding-top: 5%;
  box-sizing: border-box;
}
.prebtn>li>div>div{
  display: table-cell;
  vertical-align: middle;
  position: relative;
  left: -3%;
}
.prebtn>li>div:hover{
  cursor: pointer;
}
.prebtn li:nth-child(1)>div{
  background:url("/static/image/player1b.png");
  background-size: 100% 100%; 
}
.prebtn li:nth-child(1)>div.clickbg{
  background:url("/static/image/player1b_click.png");
  background-size: 100% 100%; 
}
.prebtn li:nth-child(2)>div{
  background:url("/static/image/player2b.png");
  background-size: 100% 100%; 
}
.prebtn li:nth-child(2)>div.clickbg{
  background:url("/static/image/player2b_click.png");
  background-size: 100% 100%; 
}
.prebtn li:nth-child(3)>div{
  background:url("/static/image/player3b.png");
  background-size: 100% 100%; 
}
.prebtn li:nth-child(3)>div.clickbg{
  background:url("/static/image/player3b_click.png");
  background-size: 100% 100%; 
}
.preplayer li div{
  width: 70%;
  height: 77%;
  margin: 16% 9%;
  position: relative;
  top: 2.7%;
  left: 2.4%;
  z-index: 2;
  background:transparent;
  overflow: hidden; 
}
.preplayer li:nth-child(2) div{
  top: 2.2%;
  left: 5%;
}
.preplayer li:nth-child(3) div{
  top: 2.3%;
  left: 9%;
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
.preplayer li div.soldamount{
  width: 70%;
  height: 5%;
  margin: 0 9%;
  top: 9%;
  text-align: center;
  font-size:16px;
  color: #fff;
}
</style>