<template>
  <div id="app" v-bind:class="{'zhapp':locale_zh,'enapp':locale_en,'jaapp':locale_ja,'ruapp':locale_ru,'koapp':locale_ko}">
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
    
  },
  created:function(){
    //初始化APP获取卡牌信息
    this.service.init();
    
    var _this = this;
    window.addEventListener("beforeunload",function(){
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    	if(web3.eth.accounts[0]){
    		sessionStorage.setItem("F5","t");
        sessionStorage.setItem("我的以太坊账户",web3.eth.accounts[0]);
    	}else{
    		sessionStorage.setItem("F5","f");
    	}

    })
  },
  mounted:function(){
    //单独拿出预售页的路由显示
    /*if(this.$route.path.indexOf("presale")>-1){
     	this.$store.dispatch("hideheader");
    }*/
  },
  updated:function(){

  },
  destroyed:function(){
  	window.removeEventListener("beforeunload");
  	sessionStorage.setItem("F5",false);
  	this.$store.state.username = "Login";
    
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
    },
    locale_zh () {
      if(this.$store.state.locale == "zh-ch"){
        return true
      }else{
        return false
      }
    },
    locale_en () {
      if(this.$store.state.locale == "en"){
        return true
      }else{
        return false
      }
    },
    locale_ja () {
      if(this.$store.state.locale == "ja"){
        return true
      }else{
        return false
      }
    },
    locale_ru () {
      if(this.$store.state.locale == "ru"){
        return true
      }else{
        return false
      }
    },
    locale_ko () {
      if(this.$store.state.locale == "ko"){
        return true
      }else{
        return false
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
  #app{
    min-width: 1000px;
  }
</style>
