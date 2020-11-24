<template>

			<view class="datashow common">
				<commonTitle>
					数据显示
				</commonTitle>
				<view class="data_content">
					<!-- 上部分 -->
					<view class="content_top">
						<view class="content_top_list">
							<text>正舵算力总值</text>
							<text>126.6TIB</text>
						</view>
						<view class="content_top_list"
							style="border-left: 1px solid #E5E5E5;border-right: 1px solid #E5E5E5;">
							<text>累计在线时长</text>
							<text>1260min</text>
						</view>
						<view class="content_top_list">
							<text>累计收益</text>
							<text>12666.8FIL</text>
						</view>
					</view>
					
					<!-- 下部分 -->
					<view class="content_bottom" style="border-top: 1px solid #E5E5E5;">
						<view class="content_bottom_list">
							<text>有效存储容量</text>
							<text>12666.8FIL</text>
						</view>
						<view class="content_bottom_list"
							style="border-left: 1px solid #E5E5E5;border-right: 1px solid #E5E5E5;">
							<text>正舵共识节点</text>
							<text>126个</text>
						</view>
						<view class="content_bottom_list">
							<text>累计收益</text>
							<text>12666.8FIL</text>
						</view>
					</view>
					
				</view>
			</view>
</template>

<script>
	import commonTitle from "./commonTitle.vue"
	export default {
		components:{
			commonTitle
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	.datashow{
		margin-top: 125rpx !important;
		.data_content{
			.content_top{
				height: 175rpx;
				width: 100%;
				display: flex;
				justify-content: space-around;
				align-items: center;
				.content_top_list{
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					align-items: center;
					width: 212rpx;
					height: 86rpx;
					text:first-child{
						color: #999999;
						padding-bottom: 28rpx;
					}
					
				}
			}
			.content_bottom{
				width: 100%;
				height: 171rpx;
				padding-bottom: 0;
				display: flex;
				justify-content: space-around;
				align-items: center;
				.content_bottom_list{
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					align-items: center;
					width: 212rpx;
					height: 86rpx;
					text:first-child{
						color: #999999;
						padding-bottom: 28rpx;
					}
				}
			}
		}
	}	
</style>

