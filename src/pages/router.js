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
	'/loop': {
		component: require('./loop')
	},
	'/type': {
		component: require('./type')
	}
})

//套路4： 导出
export default router
