<template>
  <div id="app">
    <div class="nav-box">
      <ul class="nav">
        <router-link exact to="/" tag="li" event="mouseover"><!--动态设置url-->
          <i class="fa fa-home"></i>
          <span>首页</span>
        </router-link>
        
        <li>
          <router-link :to="{path:'/document'}" active-class="activeClass">文档</router-link><!--动态设置url-->
          </li>
        <router-link to ="/about" tag="li"><!--利用tag可以自定义生成标签，并监听点击路由-->
          <i></i>
          <span>关于</span>
        </router-link>
        <router-link to ="/user" tag="li">
          <i></i>
          <span>user</span>
        </router-link>
        
      </ul>
    </div>
    <!-- <router-view name="slider"></router-view> -->

    <input type="button" value="后退" @click="backHandle">
    <input type="button" value="前进" @click="forwardHandle">
    <input type="button" value="控制前进后退的步数" @click="goHandle">
    <input type="button" value="控制到指定的push" @click="pushHandle">
    <input type="button" value="控制到指定的replace" @click="replaceHandle">
    <transition :name="names"><router-view class ="center"></router-view></transition>
    
  </div>
</template>

<script>
export default {
 data(){
  return {
    index:"/home",
    names:'left'
  }
 },
 watch:{
  $route(to,from){
    //console.log(to.meta.index)

    if(to.meta.index < from.meta.index){
      //console.log("right")
        this.names = "right"
    }else{
      //console.log("left")
      this.names = "left"
    }
  }
 },
 methods: {
  backHandle(){
    this.$router.back()
  },
  forwardHandle(){
    this.$router.forward()
  },
  goHandle(){
    this.$router.go(2)
  },
  pushHandle(){
    this.$router.push('/document')
  },
  replaceHandle(){
    this.$router.replace('/about')
  }
 }
}
</script>

<style>
  .activeClass{
    background: pink;
  }
  .v-enter{
    opacity: 0
  }
  .v-enter-to{
    opacity: 1
  }
  .v-enter-active{
    transition: 1s
  }
  .v-leave{
    opacity: 1
  }
  .v-leave-to{
    opacity: 0
  }
  .v-leave-active{
    transition: 2s
  }

  .left-enter{
    transform: translateX(100%);
  }
  .left-enter-to{
    transform: translateX(0);
  }
  .left-enter-active{
    transition: 1s;
  }
  .left-leave{
    transform: translateX(0);
  }
  .left-leave-to{
    transform: translateX(-100%);
  }
  .left-leave-active{
    transition: 1s;
  }

  .right-enter{
    transform: translateX(-100%);
  }
  .right-enter-to{
    transform: translateX(0);
  }
  .right-enter-active{
    transition: 1s;
  }
  .right-leave{
    transform: translateX(0);
  }
  .right-leave-to{
    transform: translateX(100%);
  }
  .right-leave-active{
    transition: 1s;
  }
</style>
