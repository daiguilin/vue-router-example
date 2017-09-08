import Vue from 'vue'

import App from './App'
import router from '@/router'
import '@/assets/css/app.css'



//实例一个Vue对象
new Vue({
	el:"#app",
	router:router,
	template:"<App/>",
	components: {
		App
	}
})