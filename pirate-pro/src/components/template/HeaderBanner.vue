<template>
  <div class="header-banner" :style="{'height':topbannerheight,'width':screenwidth}">
    <div class="addbox" :style="{'height':topaddheight}">
      <div class="startbtn"></div>
    </div>
    <ul class="header-nav" :style="{'height':topnavheight}">
      <li><router-link to="tabhome"></router-link></li>
      <li><router-link to="tabchannel1"></router-link></li>
      <li><router-link to="tabchannel2"></router-link></li>      
      <li><router-link to="tabchannel3"></router-link></li>
      <li><router-link to="tabchannel4"></router-link></li>
      <li><router-link to="tabchannel4"></router-link></li>
      <li><router-link to="tabchannel4"></router-link></li>            
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HeaderBanner',
  data () {
    return {
      msg: 'HeaderBanner',
      screenwidth: '',
      topbannerheight: '',
      topaddheight: '',
      topnavheight: ''
    }
  },
  mounted:function(){
    this.screenwidth = document.documentElement.clientWidth + "px";
    this.topbannerheight = parseInt(this.screenwidth) / 1910 * 887 + "px";
    this.topaddheight = parseInt(this.screenwidth) / 1910 * 807 + "px";
    this.topnavheight = parseInt(this.screenwidth) / 1910 * (887 - 807) + "px";
    console.log("000000",this.screenwidth);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header-banner{   
    background: url("../../assets/topbanner.png") left top no-repeat;
    background-size: 100%;
    color: #fff;
  }
  .header-nav{
      width: 69.1%;
      background: transparent;
      padding: 0;
      margin: 0 auto;
  }
  .addbox{
    border-top: 1px solid transparent;
    margin-top: -1px;
  }
  li{
    float:left;
    width: 14.28%;
    height: 100%;
    background: rgba(255,255,255,.3);
  }
  li>a{
    width: 100%;
    height: 100%;
    display: block;
  }
  .startbtn{
    width: 18.85%;
    height: 12.89%;
    margin: 0 auto;
    position: relative;
    top: 67.53%;
  }
</style>
