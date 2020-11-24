<template>
	<view >
		<view class="parameter">
			<view style="width: 8rpx;height: 27rpx;background: #4f29b3;"></view>
			<text style="font-size: 28rpx;margin-left: 24rpx;">{{noticeTitle}}</text>
		</view>
		<view class="notice">
			<text v-for="(item,index) in noticeDatas" :key="index">
				{{item.text}}
			</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				noticeTitle:"购买须知",
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
	.parameter{
		display: flex;
		align-items: center;
		margin-top: 35rpx;
		margin-bottom: 29rpx;
	}
	.notice{
		width: 100%;
		height: 188rpx;
		background: #FFFFFF;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		margin-bottom: 200rpx;
		text{
			margin-left: 39rpx;
		}
	}
	
</style>
