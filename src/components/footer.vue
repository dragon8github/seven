<template>
	<div id="footer">
		<nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" transition="back" v-link="{ path: '/home' }" >
				<span class="mui-icon"><i class="icon iconfont">&#xe603;</i></span>
				<span class="mui-tab-label">锻炼</span>
			</a>
			<a class="mui-tab-item" transition="back" v-link="{ path: '/study' }">
				<span class="mui-icon"><i class="icon iconfont">&#xe604;</i></span>
				<span class="mui-tab-label">学习</span>
			</a>
			<a class="mui-tab-item"  transition="back" v-link="{ path: '/achieve' }">
				<span class="mui-icon"><i class="icon iconfont">&#xe601;</i></span>
				<span class="mui-tab-label">成就</span>
			</a>
			<a class="mui-tab-item"  transition="back" v-link="{ path: '/history' }">
				<span class="mui-icon"><i class="icon iconfont">&#xe600;</i></span>
				<span class="mui-tab-label">跟踪</span>
			</a>
		</nav>
	</div>
</template>



