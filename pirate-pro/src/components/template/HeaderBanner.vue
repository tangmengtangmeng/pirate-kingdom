<template>
  <div class="header-banner" :style="{'height':topheight}">
    <div class="topright"></div>
    <div class="startbtn"></div>
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
  data () {
    return {
      msg: 'HeaderBanner',
      topheight: document.documentElement.clientWidth/1920*890 + "px",
      topnavheight: document.documentElement.clientWidth/1920*118 + "px",
      screenwidth: document.documentElement.clientWidth
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
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  .startbtn{
    width: 13.54%;
    height: 9.67%;
    margin: 0 auto;
    position: relative;
    top: 69.74%;
    background: url("../../assets/topbtn.png") center center no-repeat;
    background-size: 100% 100%;
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
