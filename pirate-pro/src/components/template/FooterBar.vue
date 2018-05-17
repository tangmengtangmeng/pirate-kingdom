<template>
  <div class="footer-bar" :style="{'height':footerHeight}">
    <div class="topfooter">
      <ul class="list1">
        <li></li><li></li><li></li>
        <li></li><li></li><li></li>
      </ul>
      <ul class="list2">
        <li></li><li></li><li></li>
      </ul>
      <ul class="list3">
        <li></li><li></li>
      </ul>
      <ul class="list4">
        <li></li><li></li><li></li>
      </ul>
    </div>
    <div class="botfooter"></div>
  </div>
</template>

<script>
export default {
  name: 'FooterBar',
  data () {
    return {
      msg: 'FooterBar',
      footerHeight: document.documentElement.clientWidth / 1920 * 500 + "px"
    }
  },
  mounted:function(){
    var _this = this;
    window.addEventListener("resize",function(){
      var val = document.documentElement.clientWidth;
      console.log("footerHeight",val);
      _this.footerHeight = val / 1920 * 500 + "px";
    })
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer-bar{
  width: 100%;
  background:url("../../assets/footer.png") left top no-repeat;
  background-size: 100% 100%;
  color: #fff;
}
.topfooter{
  width: 100%;
  height: 86.5%;
}
.botfooter{
  width: 100%;
  height: 14.5%;
}
ul{
  width: 8.4%;
  height: 100%;
  float: left;
  border: 1px solid blue;
}
.list1{
  margin-left: 20.3%;
}
.list2{
  margin-left:4%;
}
.list1>li{
  width: 100%;
  height: 7%;
  border: 1px solid red;
}
.list1>li:nth-child(1){
  height: 50%;
}
</style>