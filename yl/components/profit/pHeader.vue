<template>
	<view class="header">
		<view class="common_header" >
			<view class="common_header_content">
				<text style="font-size: 24rpx;">矿池算力</text>
				<text style="font-size: 30rpx;">126668TB</text>
			</view>
			<image src="@/static/imgs/profit/profit_left@2x.png" mode=""></image>
		</view>
		<view class="common_header">
			<view class="common_header_content">
				<text style="font-size: 24rpx;">我的算力</text>
				<text style="font-size: 30rpx;">126668TB</text>
			</view>
			<image src="@/static/imgs/profit/profit_right@2x.png" mode=""></image>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	.header{
		display: flex;
		justify-content: space-around;
		margin-top: 19rpx !important;
		width: 710rpx;
		margin: auto;
		.common_header{
			position: relative;
			.common_header_content{
				display: flex;
				flex-direction: column;
				position: absolute;
				z-index: 12;
				top: 41rpx;
				left: 41rpx;
				line-height: 70rpx;
				color: #FFFFFF;
			}
			image{
				width: 345rpx;
				height: 180rpx;
			}
		}
	}
</style>
