import Vue from 'vue'
import Vuex from 'vuex'
import action from './action'
import getter from './getter'
import mutation from './mutation'
import state from './rootState'

Vue.use(Vuex)

export default new Vuex.Store({
	action,
	getter,
	mutation,
  	state
})