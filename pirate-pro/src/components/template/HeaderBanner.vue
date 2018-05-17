<template>
  <div class="header-banner" :style="{'height':topheight}">
    <div class="topbanner" :style="{'height':topbannerheight}">
      <div class="addbox"></div>
      <div class="startbtn"></div>
      <div class="addbox"></div>
    </div>
    <div class="topnav" :style="{'height':topnavheight}">
      <ul class="navul">
        <li><router-link to="tabhome"></router-link></li>
        <li><router-link to="tabchannel1"></router-link></li>
        <li><router-link to="tabchannel2"></router-link></li>      
        <li><router-link to="tabchannel3"></router-link></li>
        <li><router-link to="tabchannel4"></router-link></li>
        <li><router-link to="tabchannel4"></router-link></li>
        <li><router-link to="tabchannel4"></router-link></li>            
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderBanner',
  data () {
    return {
      msg: 'HeaderBanner',
      topheight: document.documentElement.clientWidth/1910*890 + "px",
      topbannerheight: document.documentElement.clientWidth/1910*810 + "px",
      topnavheight: document.documentElement.clientWidth/1910*80 + "px",
      screenwidth: document.documentElement.clientWidth
    }
  },
  mounted:function(){
    const _this = this; 
    window.addEventListener("resize",function(){
      var val = document.documentElement.clientWidth;
      _this.topheight = parseInt(val) / 1910 * 890 + "px";
      _this.topbannerheight = parseInt(val) / 1910 * 810 + "px";
      _this.topnavheight = parseInt(val) / 1910 * (890 - 810) + "px";
      console.log("topbannerheight",val);
    })
  },
  watch: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header-banner{
    width: 100%;
    color: #fff;
  }
  .topbanner{
    width: 100%;
    border-top: 1px solid transparent;
    margin-top: -1px;
    background: url("../../assets/topbanner.png") left top no-repeat;
    background-size: 100% 100%;
    color: #fff;
  }
  .topnav{   
    background: url("../../assets/topnav.png") left top no-repeat;
    background-size: 100% 100%;
  }
  .navul{
      width: 69.1%;
      height: 100%;
      padding: 0;
      margin: 0 auto;      
  }
  .navul li{
    float:left;
    width: 14.28%;
    height: 100%;
    background: rgba(255,255,255,.3);
  }
  .navul li>a{
    width: 100%;
    height: 100%;
    display: block;
  }
  .addbox{
    width: 40.57%;
    height: 12.89%;
    float: left;
    position: relative;
    top: 67.53%;
  }
  .startbtn{
    width: 18.85%;
    height: 12.89%;
    float: left;
    margin: 0;
    position: relative;
    top: 67.53%;
  }
</style>
