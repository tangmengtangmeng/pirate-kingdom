<template>
  <div id="app" :style="{'height':appheight}" v-bind:lang="lang">
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
      lang: "en",
      appheight: ""
    }
  },
  methods: {
    changeLanguage(lang){
      this.$i18n.locale = lang;
      this.lang = lang;
      console.log("changeLanguage",lang);//undefined
    },
    changeAPPLocal(locale){
      this.changeLanguage(locale);
      this.$router.push({name: this.$route.name, params: {lang: this.lang}});
    }
  },
  mounted:function(){
      this.appheight = document.documentElement.clientHeight + "px";
      // this.changeLanguage(this.$route.params.lang);
      
  }
}
</script>

<style>
  p{
    color: #fff;
  }
</style>
