<template>
		<view class="title">
			<view v-for="(item,index) in indexImg" :key="index" class="title_list">
				<image :src="item.url" mode=""></image>
				<text>{{item.title}}</text>
			</view>
		</view>
</template>

<script>
	export default {
		data() {
			return {
				indexImg:[
					{
						url:require("@/static/imgs/indexImgs/jiankong@2x.png"),
						title:"矿池监控"
					},
					{
						url:require("@/static/imgs/indexImgs/join@2x.png"),
						title:"加入矿池"
					},
					{
						url:require("@/static/imgs/indexImgs/node@2x.png"),
						title:"城市节点"
					},
					{
						url:require("@/static/imgs/indexImgs/kefu@2x.png"),
						title:"联系客服"
					}
				]
			};
		}
	}
</script>

<style lang="scss" scoped>
		.title{
			width: 710rpx;
			height: 200rpx;
			background: #FFFFFF;
			display: flex;
			justify-content: space-around;
			border-radius: 10rpx;
			position: absolute;
			top: 365rpx;
			left: 20rpx;
				.title_list{
					display: flex;
					flex-direction: column;
					align-items: center;
					font-size: 24rpx;
					image{
						padding-top: 26rpx;
						width: 110rpx;
						height: 110rpx;
					}
					text{
						height: 23rpx;
						width: 96rpx;
						padding-bottom: 36rpx;
					}
				}
		}
</style>
