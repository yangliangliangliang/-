<template>
	<view class="record_content">
		<view class="record_content_list" v-for="item in 9" :class="{record_acvite:item<=3}">
			<image v-if="item<=3" src="@/static/imgs/indexImgs/jiantou@2x.png" mode=""></image>
			<text>1345</text>
		</view>
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

<style lang="scss">
	.record_content{
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		align-items: center;
		.record_acvite{
			background: #636eeb;
			margin-top: 38rpx !important;
			color: #FFFFFF;
		}
		.record_content_list{
			width: 150rpx;
			height: 52rpx;
			border-radius: 5rpx;;
			text-align: center;
			line-height: 52rpx;
			margin:  19rpx 30rpx;
			border: 1px solid #636EEB;
			position: relative;
			image{
				width: 42rpx;
				height: 14rpx;
				position: absolute;
				left: 165rpx;
				top: 20rpx;
			}
		}
	}
</style>
