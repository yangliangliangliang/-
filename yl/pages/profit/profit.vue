<template>
	<view class="container">
		<pHeader></pHeader>
		<!-- 总收益 -->
		
		<pConent></pConent>
		
		
		<!-- 收益记录 -->
		<pList></pList>
		
	</view>
</template>

<script>
	import pHeader from "@/components/profit/pHeader.vue"
	import pConent from "@/components/profit/pConent.vue"
	import pList from "@/components/profit/pList.vue"
	export default {
		components:{
			pHeader,
			pConent,
			pList
		},
		
		data(){
			return {
			
			}
		},
		
	}
</script>


<style lang="scss" scoped>
	.container{
		font-size: 24rpx;
		color: #333333;
	}
</style>
