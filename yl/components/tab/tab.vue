<template>
	<view class="tab">
		<scroll-view scroll-x 
			class="tab_scroll">
			<view class="tab_scroll_box">
				<view v-for="(item,index) in list"
						:key="index"
						class="tab_scroll_item"
						:class="{active:index == currentIndex}"
						@click="tabIcon(item,index)">
					{{item.name}}
					<view :class="{tab_icon:index == currentIndex}"></view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		props:{
			list:{
				type:Array,
				default(){
					return []
				}
			},
			tabIndex:{
				type:Number,
				default:0
			},
		},
		watch:{
			tabIndex(newVal){
				this.currentIndex = newVal
			}
		},
		data() {
			return {
				currentIndex:0
			};
		},
		methods:{
			tabIcon(item,index){
				console.log(item,index)
				this.currentIndex = index
				this.$emit("tab",{
					data:item,
					index:index
				})
			}
		}
	}
</script>

<style lang="scss" scoped>   
	.tab{
		border-bottom: 1px solid #f5f5f5;
		width:710rpx;
		height: 60rpx;
		// background: #FFFFFF;
		margin: auto;
		box-sizing: border-box;
		// top: 88rpx;
		// z-index: 12;
		.tab_scroll_box{
			display: flex;
			height: 54rpx;
			// justify-content: center;
			flex-wrap: nowrap;
			box-sizing: border-box;
			.tab_scroll_item{
				flex-shrink: 0;//不积压内容
				padding: 0 26rpx;
				color: #888888;
				display: flex;
				flex-direction: column;
				align-items: center;
				font-size: 24rpx;
				&.active{
					color: rgb(99, 110, 235);
				}
				.tab_icon{
					width: 38rpx;
					height: 6rpx;
					background: rgb(99, 110, 235);
					border-radius: 3rpx;
					margin-top: 18rpx;
				}
			}
		}
	}
</style>
