<template>
	<view class="changeBlcok">
		<view v-for="(item,index) in recordList" :key="index">
			<view class="record_bottom_list" @click="changeBlock">
				<view v-if="item.name == '正舵区块'">
					<image v-if="flag" src="@/static/imgs/indexImgs/selector@2x.png" mode=""></image>
					<image v-else src="@/static/imgs/indexImgs/circle@2x.png" mode=""></image>
				</view>
				<view v-if="item.name == '其他区块'" >
					<image v-if="!flag" src="@/static/imgs/indexImgs/selector@2x.png" mode=""></image>
					<image v-else src="@/static/imgs/indexImgs/circle@2x.png" mode=""></image>
				</view>
				<view class="">
					<text>{{item.name}}</text>
				</view> 
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			recordList:{
				type:Array,
				default(){
					return []
				}
			}
		},
		components:{
			
		},
		data() {
			return {
				flag:false,
			}
		},
		methods: {
			changeBlock(){
				this.flag = !this.flag
			}
		}
	}
</script>

<style lang="scss" scoped>
	.changeBlcok{
		display: flex;
		justify-content: space-between;
		.record_bottom_list{	
			display: flex;
			image{
				width: 24rpx;
				height: 24rpx;
			}
			text{
				margin-left: 12rpx;
				margin-right: 18rpx;
			}
		}
	}
	
</style>
