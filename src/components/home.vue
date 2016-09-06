<template>
	<div id="home"  class="mui-control-content mui-active">
		<header class="mui-bar mui-bar-nav">
			<a class="mui-pull-left"> <img src="./../../static/images/title.png" alt="logo" height="44px"> </a>
			<span class="mui-pull-right mui-icon mui-icon-info" @click="SetFilter"></span>
		</header>
		<div class="mui-content">
			<div style="height:350px;display:flex;justify-content:center;align-item:center">
				<a href="javascript:;" v-link="{ path: '/go' }">
					<img src="./../../static/images/start.jpg" alt="开始锻炼" style="max-width:300px;min-width:290px">
				</a>
			</div>
			<ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;" class="mui-navigate-right" v-link="{ path: '/type' }">
						<span class="mui-badge" style="background: transparent; font-size: smaller; color:#447373;">随机</span>
						<div class="mui-media-object mui-pull-left"><i class="icon iconfont">&#xe603;</i></div>
						<div class="mui-media-body" style="margin-top:10px;">
							<p class='mui-ellipsis'>锻炼</p>
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;"  class="mui-navigate-right"  v-link="{ path: '/loop' }">
						<span class="mui-badge" style="background: transparent; font-size: smaller; color:#447373;">5</span>
						<div class="mui-media-object mui-pull-left"><i class="icon iconfont">&#xe606;</i></div>
						<div class="mui-media-body" style="margin-top:10px;">
							<p class='mui-ellipsis'>循环</p>
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;"  class="mui-navigate-right"  v-link="{ path: '/coach' }">
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
</template>

<script>
	export default {
		methods : {
			SetFilter () {
				layer.open({
					title: [
					'<img src="./../../static/images/title.png" alt="logo" height="44px" style="margin-top:8px">',
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