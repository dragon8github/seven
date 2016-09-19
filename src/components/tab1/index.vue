<template>
	<!--页面主结构开始-->
	<div id="tab1" class="mui-views mui-fullscreen mui-control-content mui-active">
		<div class="mui-view">
			<div class="mui-navbar">
			</div>
			<div class="mui-pages">
			</div>
		</div>
	</div>
	<!--页面主结构结束-->

	<!--页面主内容区开始-->
	<div id="index" class="mui-page">
	  <!--页面标题栏开始-->
        <div class="mui-navbar-inner mui-bar mui-bar-nav">
            <a class="mui-pull-left"> <img data-lazyload="./../../../static/images/title.png" alt="logo" height="44px"> </a>
            <h1 class="mui-center mui-title">设置</h1>
            	<span class="mui-pull-right mui-icon mui-icon-info" @click="SetFilter"></span>
        </div>
		<div class="mui-page-content">
			<div class="mui-scroll-wrapper">
				<div class="mui-scroll">
					<div style="height:350px;display:flex;justify-content:center;align-item:center">
						<a href="#go">
							<img data-lazyload="./../../../static/images/start.jpg" alt="开始锻炼" style="max-width:300px;min-width:290px">
						</a>
					</div>
					<ul class="mui-table-view">
						<li class="mui-table-view-cell mui-media">
							<a href="#type" class="mui-navigate-right">
								<span class="mui-badge" style="background: transparent; font-size: smaller; color:#447373;">随机</span>
								<div class="mui-media-object mui-pull-left"><i class="icon iconfont">&#xe603;</i></div>
								<div class="mui-media-body" style="margin-top:10px;">
									<p class='mui-ellipsis'>锻炼</p>
								</div>
							</a>
						</li>
						<li class="mui-table-view-cell mui-media">
							<a href="#loop"  class="mui-navigate-right"  >
								<span class="mui-badge" style="background: transparent; font-size: smaller; color:#447373;">5</span>
								<div class="mui-media-object mui-pull-left"><i class="icon iconfont">&#xe606;</i></div>
								<div class="mui-media-body" style="margin-top:10px;">
									<p class='mui-ellipsis'>循环</p>
								</div>
							</a>
						</li>
						<li class="mui-table-view-cell mui-media">
							<a href="#coach"  class="mui-navigate-right" >
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
			</div>
		</div>
	</div>	
	<!--页面主内容区结束-->
	
	<go></go>
	<type></type>
	<coach></coach>
	<loop></loop>
	

</template>

<script>
	import go from './go'
	import coach from './coach'
	import loop from './loop'
	import type from './type'

	export default {
		components: {
			go,
			coach,
			loop,
			type
		},
		methods : {
			SetFilter () {
				layer.open({
					title: [
					'<img data-lazyload="./../../../static/images/title.png" alt="logo" height="44px" style="margin-top:8px">',
					'background-color: #BC5B4A; color:#fff;margin: 0;'
					]
					,content: '<p>12个练习灭每个各练30秒，中间休息10秒。锻炼强度在1-10为内应该为8左右，请刻苦坚持一点。 </p><p>好消息是，7分钟后，你就完成了。</p>'
					,btn: ['知道了']
					,success:function(){$('.layui-m-layerbtn span[yes]').css({"color":"inherit"})}
				});

			}
		}
	}

	window.onload = function()
	{

			//初始化单页view
			var viewApi = mui('#tab1').view({
				defaultPage: '#index'
			});


			mui('.mui-scroll-wrapper').scroll({
			    deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
			});

			var view = viewApi.view;
			(function($) {
			    //处理view的后退与webview后退
			    var oldBack = $.back;
			    $.back = function() {
			        if (viewApi.canBack()) { //如果view可以后退，则执行view的后退
			        	viewApi.back();
			        } else { //执行webview后退
			        	oldBack();
			        }
			    };
			    //监听页面切换事件方案1,通过view元素监听所有页面切换事件，目前提供pageBeforeShow|pageShow|pageBeforeBack|pageBack四种事件(before事件为动画开始前触发)
			    //第一个参数为事件名称，第二个参数为事件回调，其中e.detail.page为当前页面的html对象
			    view.addEventListener('pageBeforeShow', function(e) {
			        //                console.log(e.detail.page.id + ' beforeShow');
			    });
			    view.addEventListener('pageShow', function(e) {
			        //                console.log(e.detail.page.id + ' show');
			        //如果是运动界面，则自动开启倒计时、这里采用模拟点击的方式开启
			        if(e.detail.page.id == "go")
			        {
			        	document.querySelector('.timer').click();
			        }
			    });
			    view.addEventListener('pageBeforeBack', function(e) {
			        //                console.log(e.detail.page.id + ' beforeBack');
			    });
			    view.addEventListener('pageBack', function(e) {
			        //                console.log(e.detail.page.id + ' back');
			    });
			})(mui);
		}

	</script>


	<style>
		#tab1 .mui-navbar-inner{background:#BC5B4A;}
		.mui-page,.mui-page-content,.mui-pages,.mui-view,.mui-views{position:absolute;left:0;right:0;top:0;bottom:0;width:100%;height:100%;background:rgba(251,251,249,1);}
		.mui-pages{top:46px;height:auto}
		.mui-page.mui-transitioning{-webkit-transition:-webkit-transform .3s ease;transition:transform .3s ease}
		.mui-page-left{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}
		.mui-ios .mui-page-left{-webkit-transform:translate3d(-20%,0,0);transform:translate3d(-20%,0,0)}
		.mui-navbar{position:fixed;right:0;left:0;z-index:10;height:44px;background-color:#f7f7f8}
		.mui-navbar .mui-bar{position:absolute;background:0 0;text-align:center}
		.mui-android .mui-navbar-inner.mui-navbar-left{opacity:0}
		.mui-ios .mui-navbar-left .mui-center,.mui-ios .mui-navbar-left .mui-left,.mui-ios .mui-navbar-left .mui-right{opacity:0}
		.mui-navbar .mui-btn-nav{-webkit-transition:none;transition:none;-webkit-transition-duration:0s;transition-duration:0s}
		.mui-navbar .mui-bar .mui-title{display:inline-block;width:auto}
		.mui-page-shadow{position:absolute;right:100%;top:0;width:16px;height:100%;z-index:-1;content:''}
		.mui-page-shadow{background:-webkit-linear-gradient(left,rgba(0,0,0,0) 0,rgba(0,0,0,0) 10%,rgba(0,0,0,.01) 50%,rgba(0,0,0,.2) 100%);background:linear-gradient(to right,rgba(0,0,0,0) 0,rgba(0,0,0,0) 10%,rgba(0,0,0,.01) 50%,rgba(0,0,0,.2) 100%)}
		.mui-navbar-inner .mui-transitioning,.mui-navbar-inner.mui-transitioning{-webkit-transition:opacity .3s ease,-webkit-transform .3s ease;transition:opacity .3s ease,transform .3s ease}
		.mui-page{display:none}
		.mui-pages .mui-page{display:block}
		.mui-page .mui-table-view:first-child{margin-top:15px}
		.mui-page .mui-table-view:last-child{margin-bottom:30px}
		.mui-table-view{margin-top:20px}
		.head-img{width:40px;height:40px}
		.mui-fullscreen{position:fixed}
		.mui-ios .mui-navbar .mui-bar .mui-title{position:static}

	</style>
