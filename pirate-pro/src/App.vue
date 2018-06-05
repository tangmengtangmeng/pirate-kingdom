<template>
  <div id="app">
    <HeaderBanner v-show="showheader.showheader"></HeaderBanner>
    <router-view/>
    <FooterBar v-show="showfooter.showfooter"></FooterBar>
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
  beforeCreate:function(){
    console.log("i18n语种--",document.documentElement.clientWidth);
    this.$store.dispatch("initLang");
    console.log("i18n语种++",this.$i18n.locale);
    //单独拿出预售页的路由显示
    if(this.$route.path.indexOf("presale")>-1){
      this.$store.dispatch("hideheader");
    }
  },
  created:function(){
    //初始化APP获取卡牌信息
    this.service.init();
  },
  mounted:function(){
     
  },
  computed: {
    showheader () {
      return {
        showheader:this.$store.state.showheader
      }
    },
    showfooter () {
      return {
        showfooter:this.$store.state.showfooter
      }
    }
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
