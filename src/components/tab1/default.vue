<template>
	<!--页面主内容区开始-->
	<div id="default" class="mui-page">
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
</template>

<script>
	export default {
		methods : {
			SetFilter () {
				layer.open({
					title: [
					'<img src="./../../../static/images/title.png" alt="logo" height="44px" style="margin-top:8px">',
					'background-color: #BC5B4A; color:#fff;margin: 0;'
					]
					,content: '<p>12个练习灭每个各练30秒，中间休息10秒。锻炼强度在1-10为内应该为8左右，请刻苦坚持一点。 </p><p>好消息是，7分钟后，你就完成了。</p>'
					,btn: ['知道了']
					,success:function(){$('.layui-m-layerbtn span[yes]').css({"color":"inherit"})}
				});
			}
		}
	}

</script>