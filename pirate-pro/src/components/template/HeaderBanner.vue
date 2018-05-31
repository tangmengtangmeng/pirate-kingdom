<template>
  <div class="header-banner" :style="{'height':topheight}">
    <div class="topright">
      <div class="row">
        <div class="col-40" @click="login"><p class="text-left">{{username.username}}</p></div>
        <div class="col-60"><p class="text-right"  @click="myassets">My assets</p></div>
      </div>
    </div>
    <div class="language"  @click="changeLocale()">{{$t("message.changeLocale")}}</div>
    <div class="startbtn" :class={hide:$store.state.show}>
      <div class="btnanimation"></div>
      <div class="btntitle" @mouseover="quicklight($event)" @mouseout="normallight($event)" @click="buycard"></div>
    </div>
    <div class="topnav hide" :style="{'height':topnavheight}">
      <ul class="navul">
        <li><router-link to="presale"></router-link></li>
        <li><router-link to="introduction"></router-link></li>           
      </ul>
    </div>
    <div class="myassets" v-show="showpopup">
      <div class="shadow">
        <bigPopup :bigpopup-buymsg="buymsg"></bigPopup>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderBanner',
  // props:['lang'],
  data () {
    return {
      topheight: document.documentElement.clientWidth/1920*890 + "px",
      topnavheight: document.documentElement.clientWidth/1920*118 + "px",
      screenwidth: document.documentElement.clientWidth,
      buymsg: {},
    }
  },
  methods: {
    changeLocale: function () {
      console.log(this.$i18n.locale,this.$store.state.locale);
      this.$store.dispatch("change");
      console.log(this.$i18n.locale,this.$store.state.locale);
    },
    login: function () {
      if(this.$store.state.username.indexOf("login") > -1){
        this.service.login();
      }else{
        alert("修改昵称");
      }
      
    },
    quicklight: function (e) {
      e.target.previousElementSibling.classList.add("quicklight");
    },
    normallight: function(e){
      e.target.previousElementSibling.classList.remove("quicklight");
    },
    buycard: function(){
      this.$store.dispatch("hideheader");
      this.$router.push("/presale");
    },
    myassets: function () {
      this.service.myassets();
      this.$store.dispatch("showbigpopup");
      this.buymsg = {myassets:true};
    }
  },
  mounted:function(){
    const _this = this; 
    window.addEventListener("resize",function(){
      var val = document.documentElement.clientWidth;
      _this.topheight = parseInt(val) / 1920 * 890 + "px";
      _this.topnavheight = parseInt(val) / 1920 * 118 + "px";
    })
  },
  watch: {
    
  },
  computed: {
    username () {
      return {
        username:this.$store.state.username.slice(0,6)
      }
    },
    showpopup () {
      return this.$store.state.showbigpopup
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .myassets{
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
  .hide{
    visibility: hidden;
  }
  .header-banner{
    width: 100%;
    color: #fff;
    background:url("../../assets/topbanner.png") center center no-repeat;
    background-size: 100% 100%;
  }
  .language{
    width: 15.89%;
    height: 9%;
    float: right;
    text-align: center;
    padding-top: 2.2%;
  }
  .language:hover{
    cursor: pointer;
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
  .startbtn{
    width: 13.54%;
    height: 9.67%;
    margin: 0 auto;
    position: relative;
    top: 69.74%;
    background: url("../../assets/topbtn.png") center center no-repeat;
    background-size: 100% 100%;
    z-index: 0;
  }
  .btntitle{
    width: 100%;
    height: 100%;
    background:url("../../assets/topbtntitle.png") center center no-repeat; 
    background-size: cover;
    position: absolute;
    z-index: 3;
    animation: bigger .5s infinite alternate;
    text-align: center;
    position: relative;
    left: 0;
    transition: left .5s;
  }
  @keyframes bigger{
    from {left: 0;}
    to {left:-1.5%;}
  }
  .btntitle:hover{
    cursor: pointer;
    animation: none;
  }
  .btnanimation{
    width: 95%;
    height: 98%;
    margin-left: 2%;
    position: absolute;
    z-index: 2;
    background:rgba(132,62,26,.4); 
    border-radius: 20px;
    animation: btnlight 1.6s infinite normal;
  }
  @keyframes btnlight{
    0% {background:repeating-linear-gradient(to left,rgba(255,155,120,.4),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5)); }
    30% {background:repeating-linear-gradient(to left,rgba(255,155,120,.4),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5)); }
    60% {background:repeating-linear-gradient(to left,rgba(255,155,120,.4),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5)); }
    64% {background:repeating-linear-gradient(to left,rgba(255,155,120,.4),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5)); }
    68% {background:repeating-linear-gradient(to left,rgba(132,62,26,.5),rgba(255,155,120,.4),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5)); }
    72% {background:repeating-linear-gradient(to left,rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(255,155,120,.4),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5)); }
    76% {background:repeating-linear-gradient(to left,rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(255,155,120,.4),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5)); }
    80% {background:repeating-linear-gradient(to left,rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(255,155,120,.4),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5)); }
    84% {background:repeating-linear-gradient(to left,rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(255,155,120,.4),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5)); }
    88% {background:repeating-linear-gradient(to left,rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(255,155,120,.4),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5)); }
    92% {background:repeating-linear-gradient(to left,rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(255,155,120,.4),rgba(132,62,26,.5),rgba(132,62,26,.5)); }
    96% {background:repeating-linear-gradient(to left,rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(255,155,120,.4),rgba(132,62,26,.5)); }
    100% {background:repeating-linear-gradient(to left,rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(132,62,26,.5),rgba(255,155,120,.4)); }

  }
  .btnanimation.quicklight{
    animation: quicklight .3s infinite alternate;
  }
  @keyframes quicklight{
    from {background:rgba(135,62,26,.4); }
    to {background:rgba(255,155,90,.4); }
  }
  .quick{
    width: 95%;
    height: 98%;
    margin-left: 2%;
    position: absolute;
    z-index: 2;
    background:rgba(132,62,26,.4); 
    border-radius: 20px;
    animation: none .2s infinite alternate;
  }
  @keyframes none{
    from {background:rgba(155,62,26,.4); }
    to {background:rgba(230,170,100,.4); }
  }
  .topnav{ 
    width:76.88%;
    margin: 0 auto;   
    background: url("../../assets/topnav.png") left top no-repeat;
    background-size: 100% 100%;
    position: relative;
    top: 81%;
  }
  .navul{
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;      
  }
  .navul li{
    float: left;
    width: 50%;
    height: 100%;
  }
  .navul li>a{
    width: 100%;
    height: 100%;
    display: block;
  }
  
</style>
