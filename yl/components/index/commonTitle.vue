<template>
	<view class="common_title">
		<!-- <view class="common_circle"></view> -->
		<text>
			<slot></slot>
		</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.common_title{
	width: 100%;
	height: 60rpx;
	background: linear-gradient(-87.94999999999999deg,#ebecf7 0%, #ffffff 100%);
	border-radius: 12rpx 12rpx 0rpx 0rpx;
	text{
		padding-left: 50rpx;
		line-height: 60rpx;
	}
}
</style>
