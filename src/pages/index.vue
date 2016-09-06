<template>
	<div>
		<home></home>
		<study></study>
		<achieve></achieve>
		<setting></setting>

		<div id="footer">
			<nav class="mui-bar mui-bar-tab">
				<a class="mui-tab-item mui-active" href="#home">
					<span class="mui-icon"><i class="icon iconfont">&#xe603;</i></span>
					<span class="mui-tab-label">锻炼</span>
				</a>
				<a class="mui-tab-item"  href="#study">
					<span class="mui-icon"><i class="icon iconfont">&#xe604;</i></span>
					<span class="mui-tab-label">学习</span>
				</a>
				<a class="mui-tab-item" href="#achieve">
					<span class="mui-icon"><i class="icon iconfont">&#xe601;</i></span>
					<span class="mui-tab-label">成就</span>
				</a>
				<a class="mui-tab-item" href="#setting">
					<span class="mui-icon"><i class="icon iconfont">&#xe608;</i></span>
					<span class="mui-tab-label">设置</span>
				</a>
			</nav>
		</div>
	</div>
</template>

<script>
	import home from './../components/home'
	import study from './../components/study'
	import achieve from './../components/achieve'
	import setting from './../components/setting'

	export default {
		components: {
			home,
			study,
			achieve,
			setting
		}
	}	
</script>

<style>
	#footer .mui-active .mui-icon, #footer .mui-active .mui-tab-label{color:tan;} 
</style>