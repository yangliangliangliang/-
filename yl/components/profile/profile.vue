<template>
	<view class="user" @click="profit">
		<view class="user_left">
			<block v-if="avatar">
				<image :src="$weburl+avatar" mode="aspectFill"></image>
			</block>
			<block v-else>
				<image :src="avatar" mode="aspectFill"></image>
			</block>
			<text>{{ userphone }}</text>
		</view>
		<view class="user_right" >
			<image src="@/static/imgs/profile/dayu.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	import session from "@/utils/session.js"
	export default {
		props:{
			avatar:{
				type:String,
				default(){
					return "../../static/imgs/profile/user.png"
				}
			},
			userphone:{
				type:String,
				default(){
					return  "1**********"
				}
			},
		},
		data() {
			return { };
		},
		methods:{
			// 跳转到个人资料
			profit(){
				this.$emit("navpf")
			}
		}
	}
</script>

<style lang="scss">
		.user{
			display: flex;
			justify-content: space-between;
			margin-top: 25rpx;
			.user_left{
				display: flex;
				align-items: center;
				
				image{
					width: 77rpx;
					height: 77rpx;
					margin:0 20rpx;
				}
			}
			.user_right{
				display: flex;
				align-items: center;
				image{
					width: 12rpx;
					height: 22rpx;
					margin-right: 30rpx;
				}
			}
			
		}
</style>
