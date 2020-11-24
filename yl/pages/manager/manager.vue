<template>
	<view class="container">
		<!-- <scroll> -->
			<view class="userinfo">
				<view class="userinfo_title">
					<text style="font-size: 30rpx;">Filecoin</text>
					<view class="title_detail">
						<view class="userinfo_item">
							<text style=";margin-bottom: 10rpx;">可用</text>
							<text>0.000</text>
						</view>
						<view class="userinfo_item">
							<text style=";margin-bottom: 10rpx;">冻结</text>
							<text>0.000</text>
						</view>
					</view>
				</view>
			</view>
			<!-- 收益记录 -->
			<view class="list">
				<view class="list_title">
					<view class="list_icon"></view>
					<text style="font-size: 28rpx;">财务记录</text>
				</view>
				<view class="list_content" v-for="(item,index) in listData" :key=index>
					<view class="list_content_left">
						<view class="list_content_name">
							<image src="@/static/imgs/profit/money@2x.png" mode=""></image>
							<text style="font: 26rpx;">{{item.name}}</text>
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
		<!-- </scroll> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				listData:[
					{name:"充值"},
					{name:"提现"}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.container{
		font-size: 24rpx;
		color: #333333;
		.userinfo{
			color: #FFFFFF;
			top: 45rpx;
			width: 710rpx;
			height: 260rpx;
			background: linear-gradient(39.81deg,#323752 0%, #3c4560 100%);
			border-radius: 16px;
			box-shadow: 6rpx 13rpx 20rpx 0rpx rgba(182,182,182,0.08); 
			position: relative;
			margin: auto;
			.userinfo_title{
				position: absolute;
				top: 45rpx;
				left: 49rpx;
				.title_detail{
					display: flex;
					.userinfo_item{
						margin-top: 56rpx;
						margin-right:205rpx;
						display: flex;
						flex-direction: column;
					}
				}
			}
		}
		.list{
			margin-top: 90rpx;
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
	}
</style>

