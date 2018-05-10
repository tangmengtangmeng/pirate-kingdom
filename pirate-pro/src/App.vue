<template>
  <div id="app" :style="{'height':appheight}">
    <HeaderBanner></HeaderBanner>
    <router-view/>
    <FooterBar></FooterBar>
  </div>
</template>

<script>
import HeaderBanner from '@/components/template/HeaderBanner'
import FooterBar from '@/components/template/FooterBar'

export default {
  name: 'App',
  components: {
    HeaderBanner,
    FooterBar
  },
  data () {
    return {
      appheight:""
    }
  },
  mounted:function(){
      this.appheight = document.documentElement.clientHeight + "px";
  }
}
</script>

<style>
  
</style>
