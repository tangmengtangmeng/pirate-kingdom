<template>
  <div id="app">
    <HeaderBanner></HeaderBanner>
    <ul class="header-nav">
      <li><router-link to="tabhome">tabhome</router-link></li>
      <li><router-link to="tabchannel1">tabchannel1</router-link></li>
      <li><router-link to="tabchannel2">tabchannel2</router-link></li>      
      <li><router-link to="tabchannel3">tabchannel3</router-link></li>
      <li><router-link to="tabchannel4">tabchannel4</router-link></li>            
    </ul>
    

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
  }
}
</script>

<style>
  .header-nav{
    width: 100%;
    height: 50px;
    background: #ddd;
    color: #fff;
    padding: 0 25%;
  }
  li{
    float:left;
    width: 10%;
  }
</style>
