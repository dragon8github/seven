
<template>
	<div id="setting"  class="mui-control-content">
		<header class="mui-bar mui-bar-nav">
			<h1 class="mui-title">设置</h1>
		</header>
		<div class="mui-content" style="background:#FFF">
			<div class="title">
				一般锻炼
			</div>
			<ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;" class="mui-navigate-right">
						<img class="mui-media-object mui-pull-left" src="../../static/images/tixing.png">
						<div class="mui-media-body">
							提醒
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;" class="mui-navigate-right">
						<img class="mui-media-object mui-pull-left" src="../../static/images/yinyue.png">
						<div class="mui-media-body">
							声音
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" height="38px" src="../../static/images/zhendong.png">
						<div class="mui-media-body">
							震动
						</div>
					</a>
					<div class="mui-switch mui-active mui-switch-mini" data-switch="9">
						<div class="mui-switch-handle"></div>
					</div>
				</li>
			</ul>
			<div class="title">
				锻炼
			</div>
			<ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;" class="mui-navigate-right">
						<img class="mui-media-object mui-pull-left" src="../../static/images/jiankang.png">
						<div class="mui-media-body">
							健康
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;" class="mui-navigate-right">
						<img class="mui-media-object mui-pull-left" src="../../static/images/jiange.png">
						<div class="mui-media-body">
							间隔
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="../../static/images/suiji.png">
						<div class="mui-media-body">
							随机
						</div>
					</a>
					<div class="mui-switch mui-switch-mini" data-switch="10">
						<div class="mui-switch-handle"></div>
					</div>
				</li>
			</ul>
			<div id="web_info">
				<p >企业培训 | 合作事宜 | 版权投诉</p>
				<p>粤ICP备12345678. © 1993-2016 程序员在囧途. Powered by CyLee.</p>
			</div>
		</div>
	</div>
</template>
<style>
	#web_info{text-align: center;margin:50px auto 100px;}
	#setting .mui-media-body{padding-top:8px;}
	#setting .mui-table-view-cell>a:not(.mui-btn) {margin:-13px -15px;}
	#setting .mui-table-view .mui-media-object img{height:auto;}
</style>

