<template>
	<view class="container">
		<view class="status_bar"><!-- 占位符 --></view>
		
		<statusBarHeight></statusBarHeight>
			
		<profile :userphone ="userphone" 
				:avatar="avatar"
				@navpf="changePage"/>
			
		<!-- 当前总资产 -->
		<property/>
			
		<!-- filecoin -->
		<filecoin/>
			
		<!-- 订单中心 -->
		<order :orderList="orderList"/>
		
	</view>
</template>

<script>
	import profile from "@/components/profile/profile.vue"
	import property from "@/components/profile/property.vue"
	import filecoin from "@/components/profile/filecoin.vue"
	import order from "@/components/profile/order.vue"
	
	//方法
	import session from "@/utils/session.js"
	import { store } from "@/store/index.js"
	import { showUser } from "@/common/api/profile.js"
	export default {
		components:{
			profile,
			property,
			filecoin,
			order
		},
		onShow(){
			showUser({
				token:session.getSession("token")
			}).then(res => {
				// console.log(res)
				if(res.statusCode==200){
					let {data} = res
					this.userphone = data.data.phone
					this.avatar = data.data.avatar
					// this.$store.commit("setPhone",this.userphone)
					session.setSession("phone",this.userphone)
					session.setSession("avatar",data.data.avatar)
				}else{
					uni.showToast({
						title:data.message || "网络延迟，请稍后执行",
						image:"err",
						duration:2000
					})
				}
				
			}).catch(err => {
				this.avatar = data.data.avatar
				console.log(err)
			})
		},
		
		data() {
			return {
				userphone:"",
				avatar:"",
				orderList:[
					{
						title:"订单中心",
						// "nav":"/pages/",
						url:require("@/static/imgs/profile/dingdan.png"),
						url_dayu:require("@/static/imgs/profile/dayu.png")
					},
					{
						title:"帮助中心",
						nav:"/pages/center/center",
						url:require("@/static/imgs/profile/bangzhu@2x.png"),
						url_dayu:require("@/static/imgs/profile/dayu.png")
					},
					{
						title:"关于我们",
						nav:"/pages/about/about",
						url:require("@/static/imgs/profile/about@2x.png"),
						url_dayu:require("@/static/imgs/profile/dayu.png")
					},
				],
				
			};
		},
		methods:{
			changePage(){
				this.router.push({name:"personalData",params: { avatar:this.avatar }})
				// _this.router.replace({ name: 'avatar',params: { tempFilePaths: tempFilePaths }})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.status_bar {
	      height: var(--status-bar-height);
	      width: 100%;
	  }
	.container{
		width: 710rpx;
		font-size: 24rpx;
		color: #333333;
		margin: auto;
	}
</style>
