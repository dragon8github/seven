<template>
	<div id="study" class="mui-control-content">
		<header class="mui-bar mui-bar-nav">
			<h1 class="mui-title">学习</h1>
		</header>
		<div class="mui-content" >
			
			<h4 style="text-align:center;margin:30px auto;">坚持七个月挑战，每两个月可解锁一个新随机锻炼</h4>
			<div id="study_type">
				<div class="study_item"><img src="./../../static/images/quanshen.png" width="100%" alt=""> <p>全身</p></div>
				<div class="study_item"> <img src="./../../static/images/shangbanshen.png" width="100%" alt=""> <p>上半身</p></div>
				<div class="study_item"> <img src="./../../static/images/hexin.png" width="100%" alt=""> <p>核心部位</p></div>
				<div class="study_item"> <img src="./../../static/images/xiabanshen.png" width="100%" alt=""> <p>下半身</p></div>
				<div class="study_item"> <img src="./../../static/images/xinfei.png" width="100%" alt=""> <p>有氧运动</p></div>
				<div class="study_item"> <img src="./../../static/images/liliang.png" width="100%" alt=""> <p>力量训练</p></div>
				<div class="study_item"> <img src="./../../static/images/zhifan.png" width="100%" alt=""> <p>脂肪燃烧</p></div>
				<div class="study_item"> <img src="./../../static/images/baofa.png" width="100%" alt=""> <p>爆发式</p></div>
				<div class="study_item"> <img src="./../../static/images/shenzhan.png" width="100%" alt=""> <p>伸展运动</p></div>
			</div>
		</div>
	</div>
</template>

<style>
	#study{
		height: 90%;
	}
	#study_type{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		height: 90%;
	}
	#study_type .study_item img{
		height:100px;
		width:100px;
	}
	#study_type .study_item{
		 text-align: center;
		width:30%;
		height:20%;
	}
</style>