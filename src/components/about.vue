<template>
	<div>
	关于我们
	<hr>
	<ul class="nav">
		<!-- <router-link exact to="/about" tag="li">
			<a>study</a>
		</router-link>
		<router-link to="/about/work" tag="li">
			<a>work</a>
		</router-link>
		<router-link to="/about/hobby" tag="li">
			<a>hobby</a>
		</router-link> -->
		<p>测试数据：{{text}}</p>
		<router-link exact :to="{name:'About'}" tag="li"><!--通过name的方式可以避免写路径时写太长的字符串-->
			<a>study</a>
		</router-link>
		<router-link :to="{name:'work'}" tag="li">
			<a>work</a>
		</router-link>
		<router-link :to="{name:'hobby'}" tag="li">
			<a>hobby</a>
		</router-link>
	</ul>
	<hr>
	<router-view></router-view>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				text:"改变前"
			}
		},
		beforeRouteEnter(to,from,next){
			//console.log("beforeRouterEnter")
			//console.log(this)
			next((vm) => {
				vm.text = "改变了"
			})
		},
		beforeRouteUpdate(to,from,next){
			console.log('beforeRouteUpdate')
			next()
		},
		beforeRouteLeave(to,from,next){
			next()
		}
	}
</script>
<style></style>