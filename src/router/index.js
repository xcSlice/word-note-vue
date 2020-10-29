import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import SearchES from '@/components/SearchES'
import SearchWord from '@/components/SearchWord'
import LoginAndRegister from '@/components/LoginAndRegister'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginAndRegister
    },
    {
      path: '/searchES',
      name: 'SearchES',
      component: SearchES
    },
    {
      path: '/searchWord',
      name: 'SearchWord',
      component: SearchWord
    },
  ]
})
