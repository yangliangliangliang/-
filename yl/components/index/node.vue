<template>
	<view class="node common">
		<commonTitle>
			矿池节点
		</commonTitle>
		
		<nodeTitle></nodeTitle>
		
		<nodeItem></nodeItem>
		
	</view>
</template>

<script>
	import commonTitle from "./commonTitle.vue"
	import nodeItem from "./nodeItem.vue"
	import nodeTitle from "./nodeTitle.vue"
	export default {
		components:{
			commonTitle,
			nodeItem,
			nodeTitle
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
		.node{
			background: #FFFFFF;
			// .node_active{
			// 	background: #F4F4F4 !important;
			// }
		
			// .node_list{
			// 	display: flex;
			// 	justify-content: space-around;
			// 	background: red;
			// 	height: 53rpx;
			// 	width: 670rpx;
			// 	margin: auto;
			// 	line-height: 53rpx;
			// }
		}
</style>
