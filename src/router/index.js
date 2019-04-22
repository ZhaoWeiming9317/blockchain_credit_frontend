import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// 路由懒加载
const homePage = r => require.ensure([], () => r(require('@/components/HomePage')), 'homePage')

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: homePage
    }
  ]
})
