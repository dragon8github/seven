<template>
	<div id="go" class="mui-page">
		<div class="mui-navbar-inner mui-bar mui-bar-nav">
			<button type="button" class="mui-navbar-left mui-left mui-action-back mui-btn mui-btn-link mui-btn-nav mui-pull-left" style="color:#FAFAFA;margin-left:2px">
				取消
			</button>
			<h1 class="mui-title">1 / 12</h1>
		</div>
		<div class="mui-page-content">
			<div class="mui-scroll-wrapper">
				<div class="mui-scroll">
					<img class="go_img" src="./../../../static/images/fuwoc.png" width="100%" alt="俯卧撑">
					<div class="name">
						俯卧撑
					</div>
					<div class="timer" @click="startTimer" >
						<input type="text" v-model="timer" readonly="" style="text-align:center;background: transparent;border: 0;margin:0px;padding:0px;">
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		ready () {
			// $(".timer").click();
		},
		data () {
			return {
				timer: 30,	   //默认倒数30秒
				stop : false,   //默认是停止的，但界面加载之后会变成false
				Interval:null  //setInterval的对象
			}
		},
		methods : {
			update () {
				if(this.timer <= 0) 
				{
					this.timer = 30;
				}
				else{
					this.timer--;
				}
			},
			startTimer () {
				
				if(this.stop == false) 
				{
					this.Interval = setInterval(this.update,1000);	
				}
				else
				{
					clearInterval(this.Interval);
				}

				this.stop = !this.stop;
			}
		}
	}

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
