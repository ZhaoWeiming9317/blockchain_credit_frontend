// index.js
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

// 需要注册vuex到vue中
Vue.use(Vuex)

const state = {}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
