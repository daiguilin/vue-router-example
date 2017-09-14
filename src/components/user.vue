<template>
	<div style="height:2000px">
		user
		<div class="user-list">
			<router-link style="padding:20px" :to="'/user/'+item.tip+'/'+item.id" key="index" v-for="item,index in userList">{{item.userName}}</router-link>	
			<div v-if="userInfo.userName" class="user-info" style="font-size:20px">
				<p>姓名：{{userInfo.userName}}</p>
				<p>性别：{{userInfo.sex}}</p>
				<p>职业：{{userInfo.hobby}}</p>
			</div>
			<div class="info-list" v-if="userInfo.userName" style="font-size:20px">
				<router-link exact to="?info=follow">他的关注</router-link>
				<router-link exact to="?info=share">他的分享</router-link>
			</div>
		</div>
	</div>
</template>
<script>
let data = [
		{
			id:1,
			tip:'vip',
			userName:"leo1",
			sex:"男",
			hobby:"写代码"
		},
		{
			id:2,
			tip:'vip',
			userName:"leo2",
			sex:"男",
			hobby:"唱歌"
		},
		{
			id:3,
			tip:'common',
			userName:"leo3",
			sex:"男",
			hobby:"读书"
		},
	]
	export default {
		data(){
			return {
				userList:data,
				userInfo:{}
			}
		},
		watch:{
			$route(){
				//路径发生变化,$route会重新赋值，监控了这个属性，会执行这个函数
				this.getData()
			}
		},
		created(){
			//渲染这个组件会调用一次这个生命周期函数
			//复用这个组件，这个函数不会再次被调用
			//地址一旦发生变化，$route会重新生成一个路由信息对象
			this.getData()
			
		},
		methods:{
			getData(){
				let id=this.$route.params.userId;
				if(id){
					this.userInfo = this.userList.filter((item) => {
						return item.id == id
					})[0]
				}else{
					this.userInfo = {};
				}
			}
		}
	}
</script>
<style>
	
</style>