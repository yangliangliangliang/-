<template>
	<view class="container">
		<!-- <statusBarHeight></statusBarHeight> -->
		<!-- <scroll> -->
			<!-- headerImg	 -->
			<headerImg></headerImg>
			
			<!-- 四张图片展示区 -->
			<minImg></minImg>
			
			<!-- 数据显示 -->
			<dataShow></dataShow>
			
			<!-- 出块记录 -->
			<record></record>
			
			<!--  矿池节点-->
			<node></node>
		<!-- </scroll> -->
		
	</view>
</template>

<script>
	import headerImg from "../../components/index/headerImg.vue"
	import dataShow from "../../components/index/dataShow.vue"
	import record from "../../components/index/record.vue"
	import minImg from "../../components/index/minImg.vue"
	import node from "../../components/index/node.vue"
	export default {
		components:{
			headerImg,
			dataShow,
			record,
			minImg,
			node
		},
		data() {
			return {
				
			}
		},
		// onPageScroll(res){
		// 	// console.log(res.scrollTop);
		// },
		onTabItemTap(e){
			
			console.log(e)
		},
		
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.container {
		color: #333333;
		position: relative;
		width: 100%;
		.common{
			width: 710rpx;
			height: 406rpx;
			background: #FFFFFF;
			margin: auto ;
			margin-top: 20rpx;
			font-size: 22rpx;
			.common_title{
				width: 710rpx;
				height: 60rpx;
				background-image: linear-gradient(to left, #EBECF7, #FFFFFF);
				// line-height: 600rpx;
				text{
					font-size: 66rpx !important;
				}
			}	
			
		}
		
		
	}
</style>
