<template>
  <div class="header-banner">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'HeaderBanner',
  data () {
    return {
      msg: 'HeaderBanner'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header-banner{
  width: 100%;
  height: 150px;
  background: #000;
  color: #fff;
}
</style>
