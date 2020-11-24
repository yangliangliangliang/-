<template>
	<view class="scroll">
		<scroll-view scroll-y class="list_scroll">
			<slot></slot>			
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
	}
</script>

<style lang="scss" scoped>
	.scroll{
		flex: 1;
		overflow: hidden;
		box-sizing: border-box;
		.list_scroll{
			height: 100%;
			display: flex;
				
		}
	}
	
</style>

