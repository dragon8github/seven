<template>
	<div>
		<div id="controller">
			<!-- 路由外链 -->
			<router-view transition="back" transition-mode="in-out" keep-alive></router-view>
		</div>
		<myfooter></myfooter>
	</div>
</template>

<script>
	import myfooter from './components/footer'

	export default {
		components : {
			myfooter
		}
	}

</script>


<style>
	
	/*定义动画效果*/
	.back-transition { 
		transition: transform .4s ease;
	}
	/*定义新窗口的入场效果*/
	.back-enter{
		transform: translate(100%,0);
	}
	/*定义旧窗口的退出效果*/
	.back-leave {
		transform: translate(-100%,0);
	}
	#controller > .back-transition{
		position:absolute;
		width: 100%;
		height: 100%;
		z-index: 0;
	}
	#controller > .mui-content{height:100%;}
	.v-link-active > .mui-icon,.v-link-active > .mui-tab-label{color:tan;}
	/*.mui-active > .mui-icon,.mui-active > .mui-tab-label{color:tan;}*/

</style>