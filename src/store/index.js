// index.js
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

// 需要注册vuex到vue中
Vue.use(Vuex)

const state = {
  nav_list: [
    {name: 'Display', isActive: false},
    {name: 'Submit', isActive: true},
    {name: 'Request', isActive: false},
    {name: 'Score', isActive: false},
    {name: 'Help', isActive: false}]
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
