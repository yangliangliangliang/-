<template>
	<view class="list_item" @tap="changeImg">
		<text>头像</text>
		<view class="item_detail" >
			<image :src="$weburl+avatar" mode="aspectFill"></image>
			<view class="dayu">
				<image src="@/static/imgs/profile/dayu.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	import session from "@/utils/session.js"
	export default {
		data() {
			return {
				avatar:""
			}
		},
		mounted() {
			this.avatar = session.getSession('avatar')
			// console.log(this.avatar)
		},
		methods: {
			changeImg(){
				let _this = this
				uni.showActionSheet({
				    itemList: ['查看我的头像', '从相册选择上传'],
				    success: function (res) {
						let index = res.tapIndex;
						if(index == 0){
							let faceArr  = []
							console.log(_this.avatar)
							faceArr.push(_this.$weburl+_this.avatar)
							console.log(faceArr)
							uni.previewImage({
								urls:faceArr,
								current:faceArr[0],
							})
						}else if(index == 1){
							
							uni.chooseImage({
								count:1,
								sizeType:["compressed"],
								// sourceType:['album'],
							    success: (chooseImageRes) => {
							        const tempFilePaths = chooseImageRes.tempFilePaths[0];
									// console.log(tempFilePaths)
									_this.router.replace({ name: 'avatar',params: { tempFilePaths: tempFilePaths }})
							    }
							});
							
							// _this.$Router.push({name:"avatar"})
						}
				    },
				    fail: function (res) {
				        console.log(res);
				    }
				});
				
				
			},
		}
	}
</script>

<style lang="scss" scoped>
	@import "./common.css"
</style>
