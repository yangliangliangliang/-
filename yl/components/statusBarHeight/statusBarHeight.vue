<template>
	<view :style="{height:statusBarHeight+'px'}" >
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				statusBarHeight:0
			};
		},
		created() {
			const info = uni.getSystemInfoSync()
			this.statusBarHeight = info.statusBarHeight
		}
	}
</script>

<style>
	.statusBar{
		background: red;
	}
</style>
