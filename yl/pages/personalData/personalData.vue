<template>
	<view class="container">
		
		<view class="list">
			<headerImg :avatar="avatar"></headerImg>
			<password></password>
			<phone></phone>
		</view>
		<!-- 退出 -->
		<!-- <signOut></signOut> -->
		
		<view class="signout" @tap="signout">
			退出
		</view>
	</view>
</template>

<script>
	//组件
	import headerImg from "@/components/personalData/headerImg.vue"
	import password from "@/components/personalData/password.vue"
	import phone from "@/components/personalData/phone.vue"
	// import signOut from "@/components/personalData/signOut.vue"
	//方法
	import session from "@/utils/session.js"
	export default {
		components:{
			headerImg,
			password,
			phone,
			// signOut
		},
		onLoad() {
			// this.avatar = session.getSession('avatar')
			this.avatar = this.$Route.query.avatar
		},
		data() {
			return {
				avatar:"",
				showMask:true, 
			}
		},
		methods: {
			signout(){
				uni.showModal({
					title: '提示',  
					content: '是否退出m？',  
					success: function(res) {  
						if (res.confirm) {  
				        // 退出当前应用，改方法只在App中生效
						session.clearSession("token")
						session.clearSession("phone")
						session.clearSession("avatar") 
							plus.runtime.quit();  
						} else if (res.cancel) {  
							console.log('用户点击取消');
							 this.showMask = true;  
						}  
					}  
				});  	
			},
		}
	}
</script>

<style lang="scss" scoped>
	.container{
		width: 100%;
		height: 300rpx;
		background: #FFFFFF;
		margin-top: 20rpx;
		font-size: 28rpx;
		color: #333333;
		.signout{
			background: #000000;
			width: 100%;
			height:98rpx;
			position: fixed;
			bottom: 0;
			color: #FFFFFF;
			font-size: 32rpx;
			text-align: center;
			line-height: 98rpx;
		}
	}
</style>
