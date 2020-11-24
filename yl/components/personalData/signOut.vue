<template>
	<view class="signout" @tap="signout">
		退出
	</view>
</template>

<script>
	import session  from "@/utils/session.js"
	export default {
		data() {
			return {}
		},
		methods: {
			signout(){
				session.clearSession("token")
				session.clearSession("phone")
				session.clearSession("avatar")
				if(this.showMask) {
				  this.showMask = false;  
				  return true;  
				}else{  
				   uni.showModal({  
				     title: '提示',  
				     content: '是否退出uni-app？',  
				     success: function(res) {  
						 
				         if (res.confirm) {  
				             // 退出当前应用，改方法只在App中生效  
				             plus.runtime.quit();  
				         } else if (res.cancel) {  
				             console.log('用户点击取消');  
				         }  
				     }  
				   });  
				   return true  
				}  
			},
			
		}
	}
</script>

<style>
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
</style>
