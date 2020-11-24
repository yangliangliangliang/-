<template>
	<view class="record common">
		<!-- 标题 -->
		<commonTitle>
			出块记录
		</commonTitle>
		<!-- 内容 -->
		<recordContent></recordContent>
		
		<!-- 区块 -->
		<view class="record_bottom">
			<changeBlock :recordList="recordList"></changeBlock>
		</view>
	</view>
	
</template>

<script>
	import commonTitle from "./commonTitle.vue"
	import changeBlock from "./changeBlock.vue"
	import recordContent from "./recordContent.vue"
	export default {
		components:{
			commonTitle,
			changeBlock,
			recordContent
		},
		data() {
			return {
				// flag:false,
				recordList:[
					{
						name:"正舵区块",
						url_selector:require("@/static/imgs/indexImgs/selector@2x.png"),
						url:require("@/static/imgs/indexImgs/circle@2x.png")
					},
					{
						name:"其他区块",
						url_selector:require("@/static/imgs/indexImgs/selector@2x.png"),
						url:require("@/static/imgs/indexImgs/circle@2x.png")
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
		.record{
			.record_bottom{
				display: flex;
				// width: 320rpx;
				margin-left: 351rpx;
			}
		}
</style>
