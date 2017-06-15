import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import LoginRegisterPage from '@/components/LoginRegisterPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LoginRegisterPage',
      component: LoginRegisterPage
    },
    {
      path: '/home',
      name: 'MainPage',
      component: MainPage
    }
  ]
})
