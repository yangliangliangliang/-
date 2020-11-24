<template>
	<view class="kj">
		<statusBarHeight></statusBarHeight>
		<tab :list ="tabList" :tabIndex="currentIndex" @tab="tab"></tab>
		
		<view class="home_list">
			<scroll :currentIndex="currentIndex" @tabChange="tabChange"></scroll>
		</view>
		
	</view>
</template>
<script>
	//组件
	import scroll from "@/components/scroll/scroll.vue"
	export default {
		components:{
			scroll,
			// kjCard
			// uniLoadMore
		},
		
		data() {
			return {
				tabList:[
					{name:"全部"},
					{name:"存储服务器"},
					{name:"服务器集群"},
					{name:"单T算力"},
					{name:"节点活动"},
				],
				currentIndex:0,
				kjList:[]
			};
		},
		
		methods:{
			tab({item,index}){
				console.log(item)
				this.currentIndex = index
			},
			
			tabChange(index){
				// console.log(index)
				this.currentIndex = index
			}
		}
	}
</script>

<style lang="scss" scoped>
	page{
		height: 100%;
		display: flex;
	}
	.kj{
		// height: 100%;
		display: flex;
		flex-direction: column;
		flex: 1;
		overflow: hidden;
		.home_list{
			box-sizing: border-box;
			height: 100%;
		}
	}
	
</style>
