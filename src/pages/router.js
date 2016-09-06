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
	//首页
	'/':{
		component: require('./index')
	},
	//教练
	'/coach': {
		component: require('./coach')
	},
	//运动
	'/go': {
		component : require('./go')
	},
	//循环
	'/loop': {
		component: require('./loop')
	},
	//类型
	'/type': {
		component: require('./type')
	}
})

//套路4： 导出路由
export default router
