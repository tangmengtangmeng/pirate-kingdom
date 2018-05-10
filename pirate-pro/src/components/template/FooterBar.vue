<template>
  <div class="footer-bar" :style="{'height':footerHeight}">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'FooterBar',
  data () {
    return {
      msg: 'FooterBar',
      footerHeight: ''
    }
  },
  mounted:function(){
    this.footerHeight = parseInt(document.documentElement.clientWidth) / 1908 * 498 + "px";
    console.log("footerHeight",this.footerHeight);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer-bar{
  width: 100%;
  background: #000;
  color: #fff;
}
</style>