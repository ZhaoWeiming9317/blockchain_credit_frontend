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
    {name: 'Search', isActive: false, right: '220px'},
    {name: 'Submit', isActive: true, right: '120px'},
    {name: 'Login', isActive: false, right: '20px'}],
  title: 'All Credits Display',
  titles: [
    'All Credits Display',
    'Submit Your Credit',
    'Login'
  ],
  description: 'You can search the credit what you want to find"',
  descriptions: [
    'You can search the credit what you want to find',
    'please submit the credit that contain "credit" "creditInfor" "crditDataContractAddress"',
    ''
  ],
  tableTitle: [
    {name: 'creditId'},
    {name: 'creditInfor'},
    {name: 'score'},
    {name: 'type'}
  ],
  tableData: [{creditId: '513227199806074215WB', creditInfor: 'a infor', score: '88', type: 'student loan'},
    {creditId: '41126197809124373XY', creditInfor: 'a infor', score: '67', type: 'petty loan'},
    {creditId: '11368198812012353WB', creditInfor: 'a infor', score: '56', type: 'house loan'},
    {creditId: '313137197802271235ZH', creditInfor: 'a infor', score: '99', type: 'petty loan'}]
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
