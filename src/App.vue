<template>
	<div>
		<tab1></tab1>
		<tab2></tab2>
		<tab3></tab3>
		<tab4></tab4>
		<myfooter></myfooter>
	</div>
</template>

<script>
	import tab1 from './components/tab1/index'
	import tab2 from './components/tab2/index'
	import tab3 from './components/tab3/index'
	import tab4 from './components/tab4/index'
	import myfooter from './components/footer'

	export default {
		components: {
			tab1,
			tab2,
			tab3,
			tab4,
			myfooter
		}
	}	
</script>
