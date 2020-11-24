<template>
	<view class="">
		<view class="user_list" v-for="{item,index} in 2" :key="index">
			<view class="user_list_top">
				<text style="font-size: 28rpx;">Filecoin</text>
				<view class="">
					<image src="@/static/imgs/profile/dayu.png" mode=""></image>
				</view>
			</view>
			<view class="user_list_bottom">
				<view v-for="(item,index) in fileList" :key="index" class="common_user">
					<text class="common_title">
						{{item.title}}
					</text>
					<text>
						{{item.content}}
					</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				fileList:[
					{
						title:"可用",
						content:"0.0000"
					},
					{
						title:"冻结",
						content:"0.0000"
					},
					{
						title:"折合(CNY)",
						content:"0"
					},
				]
			};
		}
	}
</script>

<style lang="scss">
	.user_list{
		display: flex;
		flex-direction: column;
		height: 203rpx;
		margin: auto;
		background: #FFFFFF;
		margin-top: 45rpx;
		.user_list_top{
			width: 610rpx;
			margin: auto;
			margin-top: 18rpx;
			display: flex;
			justify-content: space-between;
			image{
				width: 12rpx;
				height: 22rpx;
			}
		}
		.user_list_bottom{
			display: flex;
			justify-content: space-between;
			width: 610rpx;
			margin: auto;
			.common_user{
				display: flex;
				flex-direction: column;
				margin-bottom: 34rpx;
				.common_title{
					color: #888888;
					margin-bottom: 19rpx;
					
				}
			}
		}
	}
</style>
