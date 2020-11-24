<template>
	<view class="avatar">
		<view class="avatarImg">
			<!-- <image :src="tempFilePaths" mode="aspectFill"></image> -->
			<image :src="tempFilePaths" mode="aspectFit"></image>
		</view>
		
		<!-- <view class="">
			<view class="">
				请从相册中选择等比宽高的图片
			</view>
		</view> -->
		
		<view class="avatarBt">
			<view class="avatarLf" @tap="reselect">
				重新选择
			</view>
			<view class="avatarRt" @tap="confirmpload">
				确认上传
			</view>
		</view>
	</view>
</template>

<script>
	import session from "@/utils/session.js"
	export default {
		
		data() {
			return {
				tempFilePaths:""
			};
		},
		onLoad() {
			// console.log(this.$Route.query)
			if(this.$Route.query.tempFilePaths){
				this.tempFilePaths = this.$Route.query.tempFilePaths
			}
		},
		methods:{
			//重新选择
			reselect(){
				uni.chooseImage({
					count:1,
					sizeType:["compressed"],
					sourceType:['album'],
				    success: (chooseImageRes) => {
				        const tempFilePaths = chooseImageRes.tempFilePaths[0];
						this.tempFilePaths = tempFilePaths
						console.log(this.tempFilePaths )
				    }
				});
			},
			//确认上传
			confirmpload(){
				uni.showLoading({
					mask:true,
					title:"上传中，请稍后"
				})
				uni.uploadFile({
				    url: this.$weburl + '/aUser/updateavatar', 
				    filePath: this.tempFilePaths,
				    name: 'file',
					formData: {
						'token':  session.getSession("token")
					},
				    success: (res) => {
						let data = JSON.parse(res.data)		
						// console.log(res)
						if(res.statusCode == 200){
							//保存用户头像tempFilePaths 
							this.tempFilePaths = data.data
							session.setSession("avatar",data.data)
							this.router.replace({name:"personalData"})
						}else{
							uni.showToast({
								title:data.message || "网络延迟，请稍后执行",
								image:"err",
								duration:2000
							})
						}
						
					},
					fail:(err)=>{
						console.log(err)
					},
					complete(){
						uni.hideLoading()
					}
				});
			
			}
			
		}
	}
</script>
<style lang="scss" scoped>
	.avatar{
		width: 100%;
		height: 100vh;
		background: #000000;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		.avatarImg{
			margin-top: 200rpx;
			width: 90%;
			margin: auto;
			background: #F0AD4E;
			text-align: center;
			line-height: 100%;
			image{
				
			}
		}
		.avatarBt{
			width: 90%;
			margin: auto;
			color: #FFFFFF;
			display: flex;
			justify-content: space-between;
			.avatarLf,.avatarRt{
				font-size: 35rpx;
			}
		}
	}
</style>
