<template>
	<view class="kjList" >
		<view class="list_item" v-for="(item,index) in kjList" :key="index" @tap="kjDetail(index+1)">
			<image :src="$weburl + item.comPicture" mode="" ></image>
			<view class="item_detail">
				<text style="width: 100%;">{{item.comName}}</text>
				<text style="color: #FFFFFF;
						text-align: center;
						font-size: 22rpx;
						background: #636eeb;
						border-radius: 19px;
						width: 158rpx;
						height: 38rpx;">
						{{ item.comTypes }}
				</text>
				<text>￥{{ item.comPrice }}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			kjList:{
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
			kjDetail(index){
				console.log(index)
				console.log(this.kjList)
				this.$Router.push({ name: 'storage',params: { Id: index }})
			},
		}
	}
</script>

<style lang="scss" scoped>
		.kjList{
			margin: auto;
			width: 710rpx;
			height: 390rpx;
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			.list_item{
				width: 350rpx;
				height: 446rpx;
				margin-top: 10rpx;
				display: flex;
				flex-wrap: wrap;
				justify-content: space-around;
				background: #FFFFFF;
				// &:last-child {
				// 	margin-bottom: 110rpx;
				// }
				.item_detail{
					display: flex;
					flex-wrap: wrap;
					justify-content: space-between;
					width: 300rpx;
				}
				image{
					width: 306rpx;
					height: 306rpx;
					margin-top: 18rpx;
				}
			}
		}
</style>