// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store.js'
import VueI18n from 'vue-i18n'
import initCss from './components/css/init.css'
import LangEn from './i18n/lang/en'
import LangZhCH from './i18n/lang/zhCH'
import LangZhHK from './i18n/lang/zhHK'


Vue.config.productionTip = false
Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'zh-ch',
  messages: {  
    'en': LangEn,
    'zh-ch': LangZhCH,
    'zh-hk': LangZhHK
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})

