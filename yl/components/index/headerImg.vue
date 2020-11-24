<template>
	<view class="headerImg">
		<image src="@/static/imgs/indexImgs/header@2.png" mode="widthFix"></image>
		<view class="content">
			<text class="content_1">这里是文案标题</text>
			<text class="content_2">这里是小标题小标题</text>
			<text class="content_3">这里是小标题</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		onLoad() {
			const res = uni.getSystemInfoSync();
			 
			   console.log(res.windowWidth);
			   console.log(res.screenWidth);
		}
	}
</script>

<style lang="scss" scoped>
	.headerImg{
		image{
			width: 100%;
			height: 437rpx;
		}
		.content{
			// width:100%;
			position: absolute;
			top: 142rpx;
			left: 84rpx;
			color: #FFFFFF;
			text{
				display: block;
			}
		
			.content_1{
				width: 322*2rpx;
				height: 36*2rpx;
				font-size: 49rpx;	
			}
			.content_2{
				width: 214*2rpx;
				height: 23*2rpx;
				font-size: 24rpx;
			}
			.content_3{
				width: 142*2rpx;
				height: 23*2rpx;
				font-size: 24rpx;
			}
		}
	}
	
</style>
