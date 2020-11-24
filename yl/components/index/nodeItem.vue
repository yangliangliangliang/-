<template>
	<view class="nodeItem">
		<view class="node_list" v-for="(item,index) in 4" 
			:key="index"
			:class="{node_active:item%2==1}">
		
				<text>ASD12356</text>
				<text>1260TB</text>
				<text>12666.8FIL</text>
				<text>126s</text>
			</view>
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
	.nodeItem{
		width: 100%;
		display: flex;
		flex-direction: column;
		.node_active{
			background: #F4F4F4 !important;
		}
		.node_list{
			display: flex;
			justify-content: space-around;
			height: 53rpx;
			width: 670rpx;
			margin: auto;
			line-height: 53rpx;
			.nodeTitle{
				// display: flex;
				// width: 710px !important;
				background: red;
				flex-wrap: wrap;
			}
		}
	}
		
	
</style>
