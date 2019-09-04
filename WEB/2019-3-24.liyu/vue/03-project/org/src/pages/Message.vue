<template>
	<div class="Message">
		 <p>{{msg}}</p>
	</div>
</template>

<script>
	export default{
		name:'Message',
		//这一步是默认的不写也可以
		props:{
			msg:String
		}
	}
</script>

<style scoped>
	p{
		color: red
	}
</style>