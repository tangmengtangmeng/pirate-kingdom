import Vue from 'vue'
import Vuex from 'vuex'
import actions from './action'
import getters from './getter'
import mutations from './mutation'
import state from './rootState'
import web3 from './web3.min'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
	actions,
	getters,
	mutations,
  	state
})