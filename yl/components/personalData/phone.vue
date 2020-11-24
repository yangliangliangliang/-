<template>
	<view class="list_item">
		<text>手机号</text>
		<view>
			<text style="color: #888888;">
				<!-- {{$store.state.userInfo.phone}} -->
				{{ phone }}
			</text>
		</view>
	</view>
</template>

<script>
	import session from "@/utils/session.js"
	export default {
		data() {
			return {
				phone:""
			}
		},
		created(){
			this.phone = session.getSession("phone")
		},
	}
</script>

<style lang="scss" scoped>
	@import "./common.css"
</style>
