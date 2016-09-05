<template>
	<div>
		<header class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-pull-left" style="font-size:16px;margin-top:5px;color:#FAFAFA">取消</a>
			<h1 class="mui-title">1 / 12</h1>
		</header>
		<div class="mui-content">
			<img class="go_img" src="../../static/images/fuwoc.png" width="100%" alt="俯卧撑">
			<div class="name">
				俯卧撑
			</div>
			<div class="timer" @click="startTimer" >
				<input type="text" v-model="timer" readonly="" style="text-align:center;background: transparent;border: 0;margin:0px;padding:0px;">
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				timer: 30,
				stop : false
			}
		},
		methods : {
			update (i,target) {
				if(i >= target) 
				{
					alert("倒计时完成");
				}
				else{
					var now = secs - i;
					console.log(secs,i,now);
					$('.timer').text(now);
				}
			},
			startTimer () {
				alert(this.timer);
			}
		}
	}
	$(function(){
		var secs = parseInt($(".timer").text());
		for(var i = 1 ; i<=secs ; i++) {
			window.setTimeout('update', i * 1000); 
		}	
	})
</script>

<style>
	.go_img{
		margin-top:100px;
	}
	.name{
		margin:40px auto;
		color:#000;
		font-size:25px;
		text-align: center;
	}
	.timer{
		display:flex;
		justify-content: center;
		align-items: center;
		border-radius:50%;
		border:1px solid #ccc;
		width:85px;
		height:80px;
		margin:auto;
		color:#000;
		font-size:30px;
		text-align: center;
	}
</style>
