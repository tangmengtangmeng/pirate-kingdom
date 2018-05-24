<template>
  <div id="app">
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
      
    }
  },
  methods: {
    
  },
  mounted:function(){
      
  }
}
</script>

<style>
  p{
    color: #fff;
  }
  #app,body,html{
    height: 100%;
    background: #000;
  }
</style>
