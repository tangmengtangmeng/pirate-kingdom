<template>
  <div class="header-banner" :style="{'height':topheight}">
    {{$t("message.tabhome")}}
    <div class="topright" @click="changeLocale()">
      <div></div><div></div>{{$t("message.changeLocale")}}
    </div>
    <div class="startbtn" :class={hide:$store.state.show}>
      <div class="btnanimation"></div>
      <div class="btntitle" @mouseover="quicklight($event)" @mouseout="normallight($event)"></div>
    </div>
    <div class="topnav" :style="{'height':topnavheight}">
      <ul class="navul">
        <li><router-link to="presale"></router-link></li>
        <li><router-link to="introduction"></router-link></li>           
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderBanner',
  props:['lang'],
  data () {
    return {
      topheight: document.documentElement.clientWidth/1920*890 + "px",
      topnavheight: document.documentElement.clientWidth/1920*118 + "px",
      screenwidth: document.documentElement.clientWidth,
    }
  },
  methods: {
    changeLocale: function (locale) {
      this.$i18n.locale == "zh-ch" ? this.$i18n.locale = "en" : this.$i18n.locale = "zh-ch" ;
      console.log(this.$i18n.locale);
    },
    quicklight: function (e) {
      var div = e.target;
      div.previousElementSibling.classList.add("quick");
    },
    normallight: function(e){
      var div = e.target;
      div.previousElementSibling.classList.remove("quick");
    }
  },
  mounted:function(){
    console.log(this.$i18n.locale);
    const _this = this; 
    window.addEventListener("resize",function(){
      var val = document.documentElement.clientWidth;
      _this.topheight = parseInt(val) / 1920 * 890 + "px";
      _this.topnavheight = parseInt(val) / 1920 * 118 + "px";
    })

  },
  watch: {
    
  },
  updated:function(){
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hide{
    visibility: hidden;
  }
  .header-banner{
    width: 100%;
    color: #fff;
    background:url("../../assets/topbanner.png") center center no-repeat;
    background-size: 100% 100%;
  }
  .topright{
    width: 15.89%;
    height: 9%;
    float: right;
    background:url("../../assets/moresetting.png") center center no-repeat;
    background-size: 100% 100%;
  }
  .topright>div{
    width: 20%;
    height: 17%;
    float:left;
    position: relative;
    top: 60%;
    left: 2%; 
  }
  .topright>div:nth-child(2){
    left: 10%;
  }
  .topright>div:hover{
    cursor: pointer;
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
  }
  .btntitle:hover{
    cursor: pointer;
  }
  .btnanimation{
    width: 95%;
    height: 98%;
    margin-left: 2%;
    position: absolute;
    z-index: 2;
    background:rgba(132,62,26,.4); 
    border-radius: 20px;
    animation: btnlight 1s infinite alternate;
  }
  @keyframes btnlight{
    from {background:rgba(155,62,26,.6); }
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
    animation: none .3s infinite alternate;
  }
  @keyframes none{
    from {background:rgba(155,62,26,.5); }
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
    float:left;
    width: 50%;
    height: 100%;
  }
  .navul li>a{
    width: 100%;
    height: 100%;
    display: block;
  }
  
</style>
