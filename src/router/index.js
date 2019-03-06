import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/pages/login'
import Home from '@/pages/home'
import getsystemloglist from '@/pages/getsystemloglist'
import  gethtcdlist from "@/pages/gethtcdlist"

Vue.use(Router)

export default new Router({
  routes: [
    // 测试数据
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    // 登录页面
    {path: '/', name: 'Login', component: Login},

    {
      path: '/Home', name: 'Home', component: Home,
      children: [
        {
          path: '/getsystemloglist',
          name: 'getsystemloglist',
          component: getsystemloglist,
        },
        {
          path: '/gethtcdlist',
          name: 'gethtcdlistt',
          component: gethtcdlist,
        }
      ]
    }

    ]
})
