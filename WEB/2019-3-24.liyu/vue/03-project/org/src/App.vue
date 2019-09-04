<!-- 模板 -->
<template>
	<div id="App">
		<!-- 使用组件 -->
		 <Logo/>
		 <Message msg='您好'/>
		 <p>this is home page</p>
	</div>
</template>
<!-- 逻辑 -->
<script>
//1,引入组件
	import Logo from './pages/Logo.vue'
	import Message from './pages/Message.vue'
	export default{
		name:'App',
		//这一步是默认的不写也可以
		// 2注册组件
		components:{
			Logo,
			Message
		}
	}
</script>

<style>
	
</style>