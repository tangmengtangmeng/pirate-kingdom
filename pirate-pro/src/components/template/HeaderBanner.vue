<template>
  <div class="header-banner" :style="{'height':topheight}">
    {{$t("message.tabhome")}}
    <div class="topright" @click="changeLocale()">
      <div></div><div></div>{{$t("message.changeLocale")}}
    </div>
    <div class="startbtn" :class={hide:$store.state.show}>
      <div class="btnanimation"></div>
      <div class="btntitle" @mouseover="quicklight($event)" @mouseout="normallight($event)" @click="login"></div>
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
    changeLocale: function () {
      console.log(this.$i18n.locale,this.$store.state.locale);
      this.$store.dispatch("change");
      console.log(this.$i18n.locale,this.$store.state.locale);
    },
    login: function () {
      this.service.login();
    },
    quicklight: function (e) {
      var div = e.target;
      // div.previousElementSibling.classList.add("quick");
      console.log(div.previousElementSibling.firstChild.firstChild);
      div.previousElementSibling.classList.add("big");
      while(div.previousElementSibling.hasChildNodes()){  
        div.previousElementSibling.removeChild(div.previousElementSibling.firstChild);  
      }  
      var circleBox = document.createElement('div');
      for (var i = 0; i < 50; i++) {
        var div = document.createElement('div');
        function randomNum(from, to) {
          from = Number(from);
          to = Number(to);
          var Range = to - from;
          var num = from + Math.round(Math.random() * Range); //四舍五入
          return num;
        };
        var bottom = randomNum(-80, -70);
        var left = randomNum(-78, 78);
        var duration = randomNum(10, 20) / 10;
        div.style.cssText += `animation:move1 ${duration}s linear infinite;bottom:${bottom}px;left:${left}px;`;
        div.classList.add("dot1");
        circleBox.appendChild(div);
      }
      var fire = document.getElementsByClassName("btnanimation")[0];
      fire.appendChild(circleBox);
    },
    normallight: function(e){
      var div = e.target;
      // div.previousElementSibling.classList.remove("quick");
      div.previousElementSibling.classList.remove("big");
      while(div.previousElementSibling.hasChildNodes()){  
        div.previousElementSibling.removeChild(div.previousElementSibling.firstChild);  
      }  
      var circleBox = document.createElement('div');
      for (var i = 0; i < 40; i++) {
          var div = document.createElement('div');
          //获取随机数 from 参数表示从哪个数开始  to参数表示到哪个数结束 from<= num <= to
          function randomNum(from, to) {
              from = Number(from);
              to = Number(to);
              var Range = to - from;
              var num = from + Math.round(Math.random() * Range); //四舍五入
              return num;
          };
          var bottom = randomNum(-80, -70);
          var left = randomNum(-73, 73);
          var duration = randomNum(10, 30) / 10;
          var delay = randomNum(0, 3) / 10;
          div.classList.add("dot");
          div.style.cssText += `animation:move ${duration}s linear ${delay}s infinite;bottom:${bottom}px;left:${left}px;`;
          // console.log(div);
          circleBox.appendChild(div);
      }
      var fire = document.getElementsByClassName("btnanimation")[0];
      fire.appendChild(circleBox);
    },
    creatediv: function(){
      var circleBox = document.createElement('div');
      for (var i = 0; i < 40; i++) {
          var div = document.createElement('div');
          //获取随机数 from 参数表示从哪个数开始  to参数表示到哪个数结束 from<= num <= to
          function randomNum(from, to) {
              from = Number(from);
              to = Number(to);
              var Range = to - from;
              var num = from + Math.round(Math.random() * Range); //四舍五入
              return num;
          };
          var bottom = randomNum(-80, -70);
          var left = randomNum(-73, 73);
          var duration = randomNum(10, 30) / 10;
          var delay = randomNum(0, 30) / 10;
          div.classList.add("dot");
          div.style.cssText += `animation:move ${duration}s linear ${delay}s infinite;bottom:${bottom}px;left:${left}px;`;
          // console.log(div);
          circleBox.appendChild(div);
      }
      var fire = document.getElementsByClassName("btnanimation")[0];
      fire.appendChild(circleBox);
    }
  },
  mounted:function(){
    const _this = this; 
    window.addEventListener("resize",function(){
      var val = document.documentElement.clientWidth;
      _this.topheight = parseInt(val) / 1920 * 890 + "px";
      _this.topnavheight = parseInt(val) / 1920 * 118 + "px";
    })
    this.creatediv();
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
    /*width: 95%;
    height: 98%;
    margin-left: 2%;
    position: absolute;
    z-index: 2;
    background:rgba(132,62,26,.4); 
    border-radius: 20px;
    animation: btnlight .7s infinite alternate;*/
    position: absolute;
    width: 0;
    height: 0;
    bottom: 5px;
    left: 48%;
    border-radius: 50%;
    box-sizing: border-box;
    border: 83px solid transparent;
    border-bottom: 83px solid rgba(255,165,0,.1);
    transform: translate(-50%, 0);
    filter: blur(12px) contrast(5);
  }
  .btnanimation.big{
    bottom: 2px;
    border: 85px solid transparent;
    border-bottom: 85px solid rgba(255,165,0,.1);
    filter: blur(11px) contrast(6);
  }
  @keyframes btnlight{
    from {background:rgba(155,62,26,.5); }
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
