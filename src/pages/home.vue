<template>
	<link rel="stylesheet" href="./../../static/ico/iconfont.css">
	<style>
		.mui-media-object .iconfont{font-size:25px;}
		.mui-icon .iconfont{font-size:25px;}
	</style>
	<header class="mui-bar mui-bar-nav">
		<a class="mui-pull-left">
			<img src="./../../static/images/title.png" alt="logo" height="44px">
		</a>
		<span class="mui-pull-right mui-icon mui-icon-more"></span>
	</header>
	<div class="mui-content">
			<div style="margin:30px 0px;height:310px;display:flex;justify-content:center;align-item:center">
				<img src="./../../static/images/start.jpg" alt="开始锻炼" style="max-width:300px;min-width:290px">
			</div>
			<ul class="mui-table-view">
					<li class="mui-table-view-cell mui-media">
						<a href="javascript:;" class="mui-navigate-right">
							<span class="mui-badge" style="background: transparent; font-size: smaller; color:#447373;">随机</span>
							<div class="mui-media-object mui-pull-left"><i class="icon iconfont">&#xe603;</i></div>
							<div class="mui-media-body" style="margin-top:10px;">
								<p class='mui-ellipsis'>锻炼</p>
							</div>
						</a>
					</li>
					<li class="mui-table-view-cell mui-media">
						<a href="javascript:;"  class="mui-navigate-right">
						<span class="mui-badge" style="background: transparent; font-size: smaller; color:#447373;">5</span>
							<div class="mui-media-object mui-pull-left"><i class="icon iconfont">&#xe606;</i></div>
							<div class="mui-media-body" style="margin-top:10px;">
								<p class='mui-ellipsis'>循环</p>
							</div>
						</a>
					</li>
					<li class="mui-table-view-cell mui-media">
						<a href="javascript:;"  class="mui-navigate-right">
						<span class="mui-badge" style="background: transparent; font-size: smaller; color:#447373;">林志玲</span>
							<div class="mui-media-object mui-pull-left"><i class="icon iconfont">&#xe605;
</i></div>
							<div class="mui-media-body" style="margin-top:10px;">
								<p class='mui-ellipsis'>教练</p>
							</div>
						</a>
					</li>
		</ul>
	</div>
	<nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" href="#tabbar">
				<span class="mui-icon"><i class="icon iconfont">&#xe603;</i></span>
				<span class="mui-tab-label">锻炼</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon"><i class="icon iconfont">&#xe604;</i></span>
				<span class="mui-tab-label">学习</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon"><i class="icon iconfont">&#xe601;</i></span>
				<span class="mui-tab-label">成就</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon"><i class="icon iconfont">&#xe600;</i></span>
				<span class="mui-tab-label">跟踪</span>
			</a>
		</nav>
</template>