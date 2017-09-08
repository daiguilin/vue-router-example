import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

import home from '@/components/home'
import about from '@/components/about'
import document from '@/components/document'

let router=new Router({
  //此处可以配置hash和history两种模式
  //history模式可以利用浏览器的后退和前进按钮进行页面切换
  mode: 'history',
  linkActiveClass:"is-active",
  routes: [
    {
      path: '/',
      component: home
    }
    ,{
      path: '/about',
      component: about
    },
    ,{
      path: '/document',
      component: document
    }
  ]
})

export default router;
