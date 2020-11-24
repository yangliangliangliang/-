<template>
	<view >
		<view class="parameter">
			<view style="width: 8rpx;height: 27rpx;background: #4f29b3;"></view>
			<text style="font-size: 28rpx;margin-left: 24rpx;">{{advanTitle}}</text>
		</view>
		<!-- 四方格 -->
		
		<view class="grid grid_two">
			<view class="grid_item">
				<view class="item" v-for="(item,index) in advanDatas" :key="index"> 
					<image :src="item.url" mode=""></image>
					<text style="color: #5C5AD9;margin: 31rpx 0 22rpx 0;" v-if="index==0">{{Advantage.softFine}}</text>
					<text style="color: #5C5AD9;margin: 31rpx 0 22rpx 0;" v-if="index==1">{{Advantage.hardFine}}</text>
					<text style="color: #5C5AD9;margin: 31rpx 0 22rpx 0;" v-if="index==2">{{Advantage.serGuarantee}}</text>
					<text style="color: #5C5AD9;margin: 31rpx 0 22rpx 0;" v-if="index==3">{{Advantage.companyFine}}</text>
					<text >{{item.text}}</text>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		props:{
			Advantage:{
				type:Object,
				default(){
					return { }
				}
			}
		},
		data() {
			return {
				advanTitle:"产品优势",
				advanDatas:[
					{
						url:require("@/static/imgs/storage/ruanjian@2x.png"),
						context:"软件优势",
						text:"这里是文字描述文字描述"
					},
					{
						url:require("@/static/imgs/storage/yingjian@2x.png"),
						context:"硬件优势",
						text:"这里是文字描述文字描述"
					},
					{
						url:require("@/static/imgs/storage/gongsi@2x.png"),
						context:"服务优势",
						text:"这里是文字描述文字描述"
					},
					{
						url:require("@/static/imgs/storage/fuwu@2x.png"),
						context:"公司优势",
						text:"这里是文字描述文字描述"
					}
				]
			};
		},
		methods:{
	
		}
	}
</script>

<style lang="scss" scoped>
	.parameter{
		display: flex;
		align-items: center;
		margin-top: 35rpx;
		margin-bottom: 29rpx;
	}
	.grid{
		width: 100%;
		height: 360rpx;
		background:#FFFFFF;
		display: flex;
		justify-content: center;
		align-items: center;
		.grid_item{
			width: 586rpx;
			height: 100%;
			display: flex;
			flex-wrap: wrap;
			box-sizing: border-box;
			.item{
				width: 50%;
				height: 50%;
				box-sizing: border-box;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				image{
					width: 61rpx;
					height: 60rpx;
				}
				text{
					font-size: 28rpx;
					margin-top: 10rpx;
					text-align: center;
					width: 166rpx;
					font-size: 24rpx;
				}
			}

		}
		&.grid_two{
				height: 552rpx;
		}
	}
	
</style>
