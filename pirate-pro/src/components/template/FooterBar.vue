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
      footerHeight: document.documentElement.clientWidth / 1920 * 360 + "px"
    }
  },
  mounted:function(){
    var _this = this;
    window.addEventListener("resize",function(){
      var val = document.documentElement.clientWidth;
      console.log("footerHeight",val);
      _this.footerHeight = val / 1920 * 360 + "px";
    })
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer-bar{
  width: 100%;
  background:url("../../assets/footer.png") center center no-repeat;
  background-size: cover;
}
.topfooter{
  width: 100%;
  height: 72.22%;
}
.botfooter{
  width: 100%;
  height: 27.78%;
}
ul{
  height: 100%;
  float: left;
}
.list1{
  width:29.8%; 
  padding-left: 18.9%;
  box-sizing: border-box;
}
.list1 li:nth-child(1){
  height: 29.62%;
  background:url("../../assets/footer1-1.png") center center no-repeat;
  background-size: contain;
}
.list1 li:nth-child(2){
  height: 13.46%;
  background:url("../../assets/footer1-2.png") center center no-repeat;
  background-size: contain;
}
.list1 li:nth-child(3){
  height: 13.08%;
  background:url("../../assets/footer1-3.png") center center no-repeat;
  background-size: contain;
}
.list1 li:nth-child(4){
  height: 13.08%;
  background:url("../../assets/footer1-4.png") center center no-repeat;
  background-size: contain;
}
.list1 li:nth-child(5){
  height: 11.92%;
  background:url("../../assets/footer1-5.png") center center no-repeat;
  background-size: contain;
}
.list1 li:nth-child(6){
  height: 20.38%;
  background:url("../../assets/footer1-6.png") center center no-repeat;
  background-size: contain;
}
.list2{
  width: 11.82%;
  box-sizing: border-box;
}
.list2 li:nth-child(1){
  height: 29.62%;
  background:url("../../assets/footer2-1.png") center center no-repeat;
  background-size: contain;
}
.list2 li:nth-child(2){
  height: 13.46%;
  background:url("../../assets/footer2-2.png") center center no-repeat;
  background-size: contain;
}
.list2 li:nth-child(3){
  height: 13.46%;
  background:url("../../assets/footer2-3.png") center center no-repeat;
  background-size: contain;
}
.list3{
  width: 19.74%;
  box-sizing: border-box;
  padding-left:13%; 
}
.list3 li:nth-child(1){
  height: 36.15%;
  background:url("../../assets/footer3-1.png") center center no-repeat;
  background-size: contain;
}
.list3 li:nth-child(2){
  height: 19.23%;
  background:url("../../assets/footer3-2.png") center center no-repeat;
  background-size: contain;
}
.list4{
  width: 21.88%;
  box-sizing: border-box;
  padding-left: 10%;
}
.list4 li:nth-child(1){
  height: 36.15%;
  background:url("../../assets/footer4-1.png") center center no-repeat;
  background-size: contain;
}
.list4 li:nth-child(2){
  height: 31.92%;
  background:url("../../assets/footer4-2.png") center center no-repeat;
  background-size: contain;
}
.list4 li:nth-child(3){
  height: 31.92%;
  background:url("../../assets/footer4-3.png") center center no-repeat;
  background-size: contain;
}
.botfooter{
  width: 100%;
  height: 27.77%;
  background:url("../../assets/footer5.png") center center no-repeat;
  background-size: contain; 
}
</style>