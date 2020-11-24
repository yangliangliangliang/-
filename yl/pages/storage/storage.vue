<template>
	<view class="container">
		<!-- <scroll> -->
			<!-- 产品参数 -->
			
			<parameter :Parameter="Parameter"></parameter>
			
			<!-- 产品优势 -->
			<advantage :Advantage="Advantage"></advantage>
			
			<!-- 购买须知 -->
			<notice></notice>
			
			<!-- 立即购买 -->
			<purchase></purchase>
	<!-- 	</scroll> -->
	</view>
</template>

<script>
	
	import parameter from "@/components/storage/parameter.vue"
	import advantage from "@/components/storage/advantage.vue"
	import notice from "@/components/storage/notice.vue"
	import purchase from "@/components/storage/purchase.vue"
	//方法
	import { selectCommodityById } from  "@/common/api/storage.js"
	import {Parameter, Advantage} from "@/utils/index.js"
	import session  from "@/utils/session.js"
	export default {
		components:{
			parameter,
			advantage,
			notice,
			purchase
		},
		data() {
			return {
				Parameter:{},
				Advantage:{}
			}
		},
		onLoad(){
			var _this = this 
			selectCommodityById({
				token:session.getSession("token"),
				id:this.$Route.query.Id
			}).then(res=>{
				
				let { data } = res
				
				console.log(data.data)
				// this.Parameter = data.data
				
				this.Parameter = new Parameter(data.data)
				this.Advantage = new Advantage(data.data)
				console.log(this.Advantage)
			}).catch(err=>{
				console.log(err)
				_this.$Router.push({name:"kj"})
			})
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.container{
		font-size: 24rpx;
		color: #333333;
		width: 648rpx;
		margin: auto;
		position: relative;
	}
</style>