<template>
  <div class="footer-bar">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'FooterBar',
  data () {
    return {
      msg: 'FooterBar'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer-bar{
  width: 100%;
  height: 250px;
  background: #000;
  color: #fff;
  position: fixed;
  bottom:0;
}
</style>