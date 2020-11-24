<template>
			
		<swiper
			class="swiper-box" 
			:current="tabIndex"
			@change="tabChange">
			<swiper-item v-for="(item,index) in 5" :key="index">
				<scroll-view scroll-y="true" class="list">
					<kjCard class="list_item" :kjList="kjList"></kjCard>
				</scroll-view>
			</swiper-item>
			
		</swiper>
		
		
	
</template>

<script>
	import kjCard from "@/components/kj/kjCard.vue"
	//方法
	import session  from "@/utils/session.js"
	import { selectAllCommodity } from "@/common/api/kj.js"
	export default {
		props:{
			currentIndex:{
				type:Number,
				default(){
					return 0
				}
			}
		},
		created(){
			selectAllCommodity({
				"token":session.getSession("token")
			}).then(res=>{
				// console.log(res)
				let { data } = res 
				this.kjList = data.data
			}).catch(err=>{
				console.log(err)
			})
		},
		watch:{
			currentIndex(newVal){
				this.tabIndex = newVal
			}
		},
		components:{
			kjCard
		},
		data() {
			return { 
				tabIndex:0,
				kjList:[]
			}
		},
		methods:{
			tabChange(ev){
				this.tabIndex = ev.detail.current
				this.$emit("tabChange",this.tabIndex)
			}
		}
	}
</script>


<style lang="scss" >
	.swiper-box{
		// flex: 1;
		height: calc(100vh - 50rpx);     
		.list{
			height: 100%;
			overflow: hidden;
			// display: flex;
			// flex-direction: column;
			.list_item{
				height: 100%;
			}
		}
	}
	
	
</style>



<!-- <template>
	<view class="srcoll">
		<scroll-view scroll-y class="list_scroll">
			<slot></slot>
			666666666666
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return { }
		},
	}
</script>


<style lang="scss" scoped>	
	.srcoll{
		flex: 1;
		box-sizing: border-box;
		overflow: hidden;
		.list_scroll{
			height: 100%;
			display: flex;
			flex-direction: column;
		}
	}
	
	
</style> -->