/**
 * Vue核心路由
 */

 // 套路1：引入vue和router
import Vue from 'vue'
import VueRouter from 'vue-router'

// 套路2：使用router
Vue.use(VueRouter)

// 套路3：实例化
var router = new VueRouter()

// 套路4：定制路由
router.map({
	'/':{
		component: require('./home')
	},
	'/achieve': {
		component: require('./achieve')
	},
	'/coach': {
		component: require('./coach')
	},
	'/go': {
		component : require('./go')
	},
	'/history': {
		component: require('./history')
	},
	'/home':{
		component: require('./home')
	},
	'/loop': {
		component: require('./loop')
	},
	'/study': {
		component: require('./study')
	},
	'/type': {
		component: require('./type')
	}
})

//套路4： 导出路由
export default router
