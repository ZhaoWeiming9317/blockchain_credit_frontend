import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// 路由懒加载
const HomePage = r => require.ensure([], () => r(require('@/components/HomePage')), 'HomePage')
const MainPage = r => require.ensure([], () => r(require('@/components/MainPage')), 'MainPage')
const SubmitPage = r => require.ensure([], () => r(require('@/components/SubmitPage')), 'SubmitPage')

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/HomePage/Submit'
    },
    {
      path: '*',
      redirect: '/HomePage/Submit'
    },
    {
      path: '/HomePage',
      name: 'HomePage',
      component: HomePage,
      children: [
        {
          path: '/HomePage',
          component: MainPage,
          children: [
            {
              path: '/HomePage/Submit',
              component: SubmitPage
            }
          ]
        }
      ]
    }
  ]
})
