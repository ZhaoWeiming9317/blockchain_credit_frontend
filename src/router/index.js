import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// 路由懒加载
const HomePage = r => require.ensure([], () => r(require('@/components/HomePage')), 'HomePage')
const MainPage = r => require.ensure([], () => r(require('@/components/MainPage')), 'MainPage')
const ScorePage = r => require.ensure([], () => r(require('@/components/ScorePage')), 'ScorePage')
const SubmitPage = r => require.ensure([], () => r(require('@/components/SubmitPage')), 'SubmitPage')
const DisplayPage = r => require.ensure([], () => r(require('@/components/DisplayPage')), 'DisplayPage')
const LoginPage = r => require.ensure([], () => r(require('@/components/LoginPage')), 'LoginPage')

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/HomePage/Display'
    },
    {
      path: '*',
      redirect: '/HomePage/Display'
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
              path: '/HomePage/Display',
              component: DisplayPage
            },
            {
              path: '/HomePage/Score',
              component: ScorePage
            },
            {
              path: '/HomePage/Submit',
              component: SubmitPage
            },
            {
              path: '/HomePage/Login',
              component: LoginPage
            }
          ]
        }
      ]
    }
  ]
})
