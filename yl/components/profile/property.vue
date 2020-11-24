<template>
	<view class="userinfo">
		<view class="userinfo_title">
			<text style="font-size: 24rpx;">{{totalPro}}</text>
			<view class="userinfo_title_detail">
				<text style="font-size: 32rpx">{{fil}}FIL</text>
				<text style="color: #BDBCBC;">≈{{cny}}CNY</text>
			</view>
		</view>
		<view class="userinfo_operate">
			<text class="">
				{{recharge}}
			</text>
			<text style="margin-top: 47rpx;">
				{{Withdrawal}}
			</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				totalPro:"当前总资产",
				fil:"126526.12",
				cny:"1260",
				recharge:"充值",
				Withdrawal:"提现"
			};
		}
	}
</script>

<style lang="scss" scoped>
		.userinfo{
			color: #FFFFFF;
			margin-top: 45rpx;
			height: 203rpx;
			background: linear-gradient(12.529999999999973deg,#000000 0%, #2e39b3 0%, #5e1cb3 100%);
			border-radius: 12rpx;
			box-shadow: 6rpx 13rpx 20rpx 0rpx rgba(182,182,182,0.08); 
			position: relative;
			.userinfo_title{
				position: absolute;
				top: 33rpx;
				left: 59rpx;
				.userinfo_title_detail{
					display: flex;
					flex-direction: column;
					margin-left:23rpx;
					// margin-top: 13rpx;
					// margin-bottom: 33rpx;
				}
			}
			.userinfo_operate{
				position: absolute;
				top: 40rpx;
				left: 544rpx;
				display: flex;
				flex-direction: column;
				text-align: center;
				text{
					background: #ffffff;
					border-radius: 23rpx;
					width: 106rpx;
					height: 45rpx;
					color: #5e1cb3;
					line-height: 45rpx;
				}
			}
		}
</style>
