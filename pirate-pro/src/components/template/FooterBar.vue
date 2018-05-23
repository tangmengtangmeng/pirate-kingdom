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
  background:#000;
  color: #fff;
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
  width:30.6%;
  background: url("../../assets/footer1.png") center center no-repeat;
  background-size: cover;
}
.list2{
  width: 15.6%;
  background: url("../../assets/footer2.png") center center no-repeat;
  background-size: cover;
}
.list3{
  width: 20.1%;
  background: url("../../assets/footer3.png") center center no-repeat;
  background-size: cover;
}
.list4{
  width: 33.7%;
  background: url("../../assets/footer4.png") center center no-repeat;
  background-size: cover;
}
.botfooter{
  width: 100%;
  height: 27.77%;
  background:url("../../assets/footer5.png") center center no-repeat;
  background-size: cover; 
}
</style>