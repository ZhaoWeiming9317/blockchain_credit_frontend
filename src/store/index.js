// index.js
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

// 需要注册vuex到vue中
Vue.use(Vuex)

const state = {
  now_page: 0,
  is_log: true,
  nav_list: [
    {name: 'Search', isActive: false, right: '320px'},
    {name: 'Score', isActive: false, right: '220px'},
    {name: 'Submit', isActive: true, right: '120px'},
    {name: 'Login', isActive: false, right: '20px'}],
  title: 'All Credits Display',
  titles: [
    'All Credits Display',
    'Score the Credit',
    'Submit Your Credit',
    'Login'
  ],
  description: 'You can search the credit what you want to find"',
  descriptions: [
    'You can search the credit what you want to find',
    'You can give score to what you have requested',
    'please submit the credit that contain "credit" "creditInfor" "crditDataContractAddress"',
    ''
  ],
  tableTitle: [
    {name: 'creditFrom'},
    {name: 'creditId'},
    {name: 'score'},
    {name: 'type'}
  ],
  initialCreditData: [],
  displayData: [],
  totalDisplayData: [],
  username: 'william'
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
