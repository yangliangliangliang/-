<template>
	<view >
		<view class="parameter">
			<view style="width: 8rpx;height: 27rpx;background: #4f29b3;"></view>
			<text style="font-size: 28rpx;margin-left: 24rpx;">{{paramTitle}}</text>
		</view>
		<view class="grid">
			<view class="grid_item">
				<view :class="{item:true,active:true}" v-for="(item,index) in gridDatas" :key="index">
					<text style="color: #5C5AD9;">{{item.upText}}</text>
					<text v-if="index==0">{{Parameter.comCup}}</text>
					<text v-if="index==1">{{Parameter.comSlot}}</text>
					<text v-if="index==2">{{Parameter.comT}}</text>
					<text v-if="index==3">{{Parameter.comMemory}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			Parameter:{
				type:Object,
				default(){
					return { }
				}
			}
		},
		// watch(){
		// 	Parameter(newVal,oldVal){
		// 		console.log(newVal)
		// 		return 12
		// 	}
		// },
		data() {
			return {
				paramTitle:"产品参数",
				gridDatas:[
					{
						upText:"CUP",
						// downText:"AMD/Intel"
					},
					{
						upText:"Slot",
						// downText:"--"
					},
					{
						upText:"T",
						// downText:"1T"
					},
					{
						upText:"Memory",
						// downText:"--"
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
	.grid{
		width: 100%;
		height: 360rpx;
		background:#FFFFFF;
		display: flex;
		justify-content: center;
		align-items: center;
		.grid_item{
			width: 648rpx;
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
			
			.active{
				border-left: 1rpx solid #F4F4F4;
				border-top: 1rpx solid #F4F4F4;
			}
		}
	}
	
</style>
