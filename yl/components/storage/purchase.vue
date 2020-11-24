<template>
	<view class="buy">
		<view class="left">
			<text>{{price}}</text>
			<text style="color: red;font-size: 26rpx;">￥{{money}}</text>
		</view>
		<view class="right">
			立即购买
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				price:"价格",
				money:"1266",
				noticeDatas:[
					{
						text:"1. 这里是内容这是够买须知；"
					},
					{
						text:"2. 实际上体育局体育局对方过后和；"
					},
					{
						text:"3. 就市房管局客户可惊慌个可归还扣积分换。"
					}
				]
			};
		},
	}
</script>

<style lang="scss" scoped>
	.buy{
		position: fixed;
		bottom:0;
		left: 0;
		width: 100%;
		height: 98rpx;
		display: flex;
		.left{
			flex: 1;
			height: 100%;
			background: #FFFFFF;
			display: flex;
			align-items: center;
			text{
				margin-left: 50rpx;
			}
		}
		.right{
			width: 330rpx;
			height: 98rpx;
			background: #625bda;
			font-size: 30rpx;
			color: #FFFFFF;
			text-align: center;
			line-height: 98rpx;		
		}
	}
</style>
