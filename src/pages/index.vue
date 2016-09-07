<template>
	<div>
		<home></home>
		<study></study>
		<achieve></achieve>
		<setting></setting>
		<myfooter></myfooter>
	</div>
</template>

<script>
	import home from './../components/home'
	import study from './../components/study'
	import achieve from './../components/achieve'
	import setting from './../components/setting'
	import myfooter from './../components/footer'

	console.log(myfooter)

	export default {
		components: {
			home,
			study,
			achieve,
			setting,
			myfooter
		}
	}	
</script>
