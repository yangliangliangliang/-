<template>
	<view class="list_item" @click="nav">
		<text>登陆密码</text>
		<view class="item_detail" >
			<text style="color: #888888;" >去修改</text>
			<view class="dayu">
				<image src="@/static/imgs/profile/dayu.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		onLoad() {},
		methods: {
			//跳转修改
			nav(){
				uni.navigateTo({
					url: '/pages/password/password'
				})
			},
			
		}
	}
</script>

<style lang="scss" scoped>
	@import "./common.css"
</style>
