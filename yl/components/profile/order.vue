<template>
	<view class="user_footer">
		<view v-for="(item,index) in orderList" :key="index">
			<view class="footer_common" @click="navClick(item.nav)">
				<view class="footer_common_detail">
					<image :src="item.url" mode=""></image>
					<text>{{item.title}}</text>
				</view>
				<view class="user_right_dayu" >
					<image :src="item.url_dayu" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			orderList:{
				type:Array,
				default(){
					return []
				}
			}
		},
		data() {
			return {
				
			};
		},
		methods:{
			navClick(nav){
				uni.navigateTo({
					url:nav
				})
			}
		}
	}
</script>

<style lang="scss">
	.user_footer{
		display: flex;
		flex-direction: column;
		background: #FFFFFF;
		margin-top: 20rpx;
		.footer_common{
			display: flex;
			justify-content: space-between;
			height: 90rpx;
			align-items: center;
			margin-left: 46rpx;
			border-bottom: 1px solid #EDEDED;
			.footer_common_detail{
					display: flex;
					image{
						width: 29rpx;
						height: 34rpx;
						margin-right: 33rpx;
					}
			}
			.user_right_dayu{
				image{
					width: 10rpx;
					height: 20rpx;
					margin-right: 33rpx;
				}
			}
		}
	}
</style>
