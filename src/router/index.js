import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

import home from '@/components/home'
import about from '@/components/about'
import document from '@/components/document'
import user from '@/components/user'
import nofound from '@/components/404'

import study from '@/views/study'
import work from '@/views/work'
import hobby from '@/views/hobby'

import slider from '@/views/slider'

let router=new Router({
  //此处可以配置hash和history两种模式
  //history模式可以利用浏览器的后退和前进按钮进行页面切换
  mode: 'history',
  linkActiveClass:"is-active",  //自定义激活状态下的class
  scrollBehavior(to,from,savePosition){//点击浏览器的前进后退或切换导航触发
    //console.log(to)//要进入的目标路由对象，要去向哪里
   // console.log(from)//离开的路由对象 从哪里来
    //console.log(savePosition)//记录滚动条的坐标 点击前进后退的时候记录值
    if(savePosition){
      return savePosition
    }else{
      return {x:0,y:0}
    }
  },
  routes: [
    {
      path:'/',
      component: home,
      meta:{
       index:0,
       title:"home" 
      },
    },
    {
      path:'/user/:tip?/:userId?',
      component:user,
      meta:{
       index:3 ,
       title:'user'
      }
    },
    {
      path: '/home',
      name:'Home',
      component: home,
      alias:'/index'//起别名,当在地址栏里输入index按enter就会进入当前路由,但由于地址栏里地址是index，所以class没有激活状态
    },
    {
      path: '/about',
      component: about,
      
      children:[
        {
          path: '',//about下的默认的子路由
          name:'About',//有默认子路由的话，不要在父路由中设置name，应该在子路由中设置
          component:study,
          meta:{
           index:2,
           title:'about'
          },
        },
        {
          path: 'work',
          name:'work',
          component:work
        },
         {
          path: 'hobby',
          name:'hobby',
          component:hobby
        },
      ]
    },
    {
      path: '/document',
      name:'Document',
      beforeEnter(to,from,next){
        console.log("beforeEnter")
        next()
      },
      meta:{
       index:1,
       //login:true,
       title:'document'
      },
      components: {
        default:document,
        slider:slider
      }
    },

    /*{
      path:'*',//通配符定义当访问的路径不存在时访问的页面
      //component:nofound
      //重定向的四种写法
      //redirect:'/home',
      //redirect:{path:'/home'}
      //redirect:{name:'About'}//通过路由中的name值定向
      redirect:(to) => {//动态设置重定向的目标，
        //目标路由对象，就是访问的路径的路由信息
        if(to.path ==='/123'){
          return '/home'
        }else if(to.path === '/456'){
          return {path:'/document'}
        }else{
          return {name:'About'}
        }
       // return '/home'
      }
    }*/
  ]
})

/*router.beforeEach((to,from,next) => {
    //next()
    //next(false)
    if(to.meta.login){
      next('/login')
    }else{
      next()
    }
})

router.afterEach((to,from,next) => {
  if(to.meta.title){
    window.document.title = to.meta.title
  }else{
    window.document.title='miaov'
  }
})*/
export default router;
