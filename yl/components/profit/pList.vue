<template>
	<view class="list">
		<view class="list_title">
			<view class="list_icon"></view>
			<text style="font-size: 28rpx;">收益记录</text>
		</view>
		<view class="list_content" v-for="item in 2">
			<view class="list_content_left">
				<view class="list_content_name">
					<image src="@/static/imgs/profit/money@2x.png" mode=""></image>
					<text style="font: 26rpx;">这里是名称</text>
				</view>
				<text class="" style="font: 24rpx;color: #999999;margin-top: 32rpx;">
					2018.12.20 16:32
				</text>
			</view>
			<view style="color: red; font-size: 32rpx;margin-top: 25rpx;">
				+￥500.00
			</view>	
		</view>
	</view>
	
</template>

<script>
</script>

<style lang="scss" scoped>
	.list{
		margin-top: 32rpx;
		.list_content{
			display: flex;
			justify-content: space-between;
			padding: 23rpx 24rpx 24rpx 38rpx;
			border-bottom: 1px solid #ECECEC;
			.list_content_left{
				display: flex;
				flex-direction: column;
				.list_content_name{
					display: flex;
					image{
						width: 28rpx;
						height: 33rpx;
						margin-right: 24rpx;
					}
				}
			}
		}
		.list_title{
			display: flex;
			margin-top: 29rpx;
		}
		.list_icon{
			width: 8rpx;
			height: 32rpx;
			background: #333333;
			margin:0 18rpx 0 24rpx;
		}
	}
</style>
