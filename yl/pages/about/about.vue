<template>
	<view class="container">
			<view class="logo">
				<image :src="avatar" mode=""></image>
				<text>LOGO</text>
			</view>
			<view class="user_footer">
				
				 <view class="footer_common" v-for="(item,index) in aboutData" :key="index">
						<view class="footer_common_detail">
							<text>{{item.title}}</text>
						</view>
						<view class="user_right_dayu">
							<text>{{ item.url || item.context  }}</text>
							<image v-if="index==aboutData.length-1" src="@/static/imgs/profile/dayu.png" mode=""></image>
						</view>
				</view>
			</view>
	</view>
</template>

<script>
	import { selectAbouts } from "@/common/api/about.js"
	import session from "@/utils/session.js"
	export default {
		data() {
			return {
				avatar:"",
				aboutData:[
					{title:"官方网站"},
					{title:"微信客服"},
					{title:"合作邮箱"},
					{title:"版本更新",context:"最新版本"},
					//--------------
					// {title:"官方网站","websites":""},
					// {title:"微信客服","wxServices":""},
					// {title:"合作邮箱","email":""},
					// {title:"版本更新",context:"最新版本"}
				]
			}
		},
		onLoad(){
			selectAbouts({
				"token":session.getSession("token")
			}).then(res=>{
				
				let { data }  = res
				
				this.avatar = this.$weburl + data.data.avatar
				
				this.aboutData[0].url = data.data.websites
				this.aboutData[1].url = data.data.wxServices
				this.aboutData[2].url = data.data.email
				
			}).catch(err=>{
				console.log(err)
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
		.logo{
			width: 100%;
			height: 98rpx*3;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 28rpx;
			flex-direction: column;
			image{
				width: 137rpx;
				height: 138rpx;
			}
		}
		.user_footer{
			display: flex;
			flex-direction: column;
			background: #FFFFFF;
			margin-top: 20rpx;
			font-size: 26rpx;
			.footer_common{
				display: flex;
				justify-content: space-between;
				height: 90rpx;
				align-items: center;
				margin-left: 46rpx;
				border-bottom: 1px solid #EDEDED;
				.footer_common_detail{
						display: flex;
						image{
							width: 29rpx;
							height: 34rpx;
							margin-right: 33rpx;
						}
				}
				.user_right_dayu{
					text{
						margin-right:33rpx ;
					}
					image{
						width: 10rpx;
						height: 20rpx;
						margin-right: 33rpx;
					}
				}
			}
		}
	}
</style>
