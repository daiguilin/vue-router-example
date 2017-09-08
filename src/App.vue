<template>
  <div id="app">
    <div class="nav-box">
      <ul class="nav">
        <li>
          <router-link to="/home">首页</router-link>
        </li>
        <li>
          <router-link to="/document">文档</router-link>
          </li>
        <li>
          <router-link to="/about">关于</router-link>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
 
}
</script>

<style>
</style>
