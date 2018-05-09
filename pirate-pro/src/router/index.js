import Vue from 'vue'
import Router from 'vue-router'
import TabHome from '@/components/template/TabHome'
import TabChannel1 from '@/components/template/TabChannel1'
import TabChannel2 from '@/components/template/TabChannel2'
import TabChannel3 from '@/components/template/TabChannel3'
import TabChannel4 from '@/components/template/TabChannel4'



Vue.use(Router)

export default new Router({
  routes: [
    {
		path: '/',
		name: 'HomePage',  
		component:TabHome
    },
    {
		path: '/tabhome',
    	name: 'TabHome',
    	component:TabHome
    },
    {
		path: '/tabchannel1',
    	name: 'TabChannel1',
    	component:TabChannel1
    },
    {
		path: '/tabchannel2',
    	name: 'TabChannel2',
    	component:TabChannel2
    },
    {
		path: '/tabchannel3',
    	name: 'TabChannel3',
    	component:TabChannel3
    },
    {
		path: '/tabchannel4',
    	name: 'TabChannel4',
    	component:TabChannel4
    }
  ]
})
