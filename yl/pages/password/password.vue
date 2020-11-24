<template>
	<view class="container">
		
			<view class="list">
				<view class="list_item">
					<image src="@/static/imgs/password/iphone@2x.png" mode=""></image>
					<text style="margin-right: 83rpx;">手机号</text>
					<input type="text" v-model="phoneData" placeholder="请输入手机号"/>
				</view>
				<view class="list_item">
					<image src="@/static/imgs/password/code@2x.png" mode=""></image>
					<text style="margin-right: 83rpx;" >验证码</text>
					<input type="text" v-model="code"  placeholder="请输入验证码" />
					<view class="item_detail" >
						<!-- <text>获取验证码</text> -->
						<view 
							:class="['vercode',{'vercode-run':second>0}]"
							@tap="setCode">
							{{  getVerCodeSecond }}
						</view>
					</view>
				</view>
				<view class="list_item">
					<image src="@/static/imgs/password/password@2x.png" mode=""></image>
					<text style="margin-right: 55rpx;">输入密码</text>
					<input type="text" v-model="password"  placeholder="请输入新的登录密码"/>
				</view>
				<view class="list_item">
					<image src="@/static/imgs/password/password@2x.png" mode=""></image>
					<text style="margin-right: 55rpx;">确认密码</text>
					<input type="text" v-model="newpassword"  placeholder="请再次确认登录密码"/>
				</view>
			</view>
			
			<view class="advice">
				*建议密码为6-18位数字和字母结合
			</view>
			<!-- 退出 -->
			<view class="preservation" @click="preserve">
				保存
			</view>
		
	</view>
</template>

<script>
	var _this, countDown;
	//组件
	import wInput from '@/components/watch-login/watch-input.vue' //input
	import wButton from '@/components/watch-login/watch-button.vue' //button
	//方法
	import session from "@/utils/session.js"
	import { sendMessage } from "@/common/api/login.js"
	import { updatePassword } from "@/common/api/password.js"
	export default {
		components:{
			wInput,
			wButton
		},
		data() {
			return {
				phoneData:"",
				code:"",
				password:"",
				newpassword:"",
				second: 0, //倒计时
				isRunCode: false, //是否开始倒计时
				setTime:60,
				codeText:"获取验证码"
			}
		},
		onLoad() {
			
		},
		computed:{
			_setTime() {
				//处理值
				const setTime = Number(this.setTime)
				return setTime>0 ? setTime : 60
			},
			getVerCodeSecond(){
				//验证码倒计时计算
				if(this.second<=0){
					return this.codeText;
				}else{
					if(this.second<10){
						return '0'+this.second;
					}else{
						return this.second;
					}
				}
				
			}
		},
		mounted() {
			_this=this
			//准备触发
			this.$on('runCode',(val)=>{
				console.log(11111111111)
		        this.runCode(val);
		    });
			clearInterval(countDown);//先清理一次循环，避免缓存
		},
		methods: {
			setCode(){
				if (!/^1[3-9]\d{9}$/.test(this.phoneData)) {
				     uni.showToast({
				        icon: 'none',
				        title: '手机号格式不正确'
				    });
				    return false;
				}
				
				//设置获取验证码的事件
				if(this.isRunCode){
					//判断是否开始倒计时，避免重复点击
					return false;
				}
				
				
				uni.showToast({
				    icon: 'none',
				    title: '已发送'
				});		
				
				//获取验证码
				sendMessage({
					phone:this.phoneData
				}).then(res=>{
							
				
									
					this.runCode()	
					// this.$refs.runCode.$emit('runCode'); //触发倒计时（一般用于请求成功验证码后调用）
				
					this.code = "9999"
				}).catch(err=>{
					console.log(err)
				})
				
			},
			runCode(val){
				
				if(String(val)=="0"){
					
					//判断是否需要终止循环
					this.second = 0; //初始倒计时
					clearInterval(countDown);//清理循环
					this.isRunCode= false; //关闭循环状态
					return false;
				}
				if(this.isRunCode){
					//判断是否开始倒计时，避免重复点击
					return false;
				}
				this.isRunCode = true
				this.second = this._setTime //倒数秒数
				
				let _this=this;
				countDown = setInterval(()=>{
					_this.second--
					if(_this.second == 0 ){
						this.isRunCode = false
						clearInterval(countDown)
					}
				},1000)
			},
			
			//保存
			preserve(){
				if (!/^1[3-9]\d{9}$/.test(this.phoneData)) {
				    uni.showToast({
				        icon: 'none',
				        title: '手机号格式不正确'
				    });
				    return false;
				}
				
				updatePassword({
					phone:this.phoneData,
					code:this.code,
					password:this.password,
					newpassword:this.newpassword,
					token:session.getSession("token")
				}).then(res=>{
					console.log(res)
					let {data} = res
					uni.showToast({
					    icon: 'none',
					    title: data.message
					});
				}).catch(err=>{
					console.log(err)
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container{
		width: 100%;
		height: 400rpx;
		background: #FFFFFF;
		margin-top: 20rpx;
		font-size: 28rpx;
		color: #333333;
		.list_item{
			display: flex;
			border-bottom: 1px solid #F4F4F4;
			width: 710rpx;
			height: 100rpx;
			align-items: center;
			margin-left: 21rpx;
			position:relative;
			.item_detail{
				width: 210rpx;
				height: 60rpx;
				background: linear-gradient(#323a66 0%, #2d2e39 0%, #3d3d3d 100%);
				border-radius: 30rpx;
				text-align: center;
				font-size: 20rpx;
				color: #FFFFFF;
				line-height: 60rpx;
				position: absolute;
				left: 70%;
				.vercode {
					// color: rgba(0,0,0,0.7);
					color: #FFFFFF;
					font-size: 24rpx;
					/* line-height: 100rpx; */
				}
				.vercode-run {
					color: rgba(256,256,256,0.5) !important;
					// color: #FFFFFF;
				}
			}
			image{
				width: 20rpx;
				height: 30rpx;
				margin-right: 24rpx;
			}
			input{
				font-size: 24rpx;
				width: 70%;
			}
		}
		.preservation{
			background: #000000;
			width: 480rpx;
			height:88rpx;
			color: #FFFFFF;
			font-size: 32rpx;
			text-align: center;
			line-height: 98rpx;
			margin-top: 120rpx !important;
			margin: auto;
		}
		.advice{
			font-size: 24rpx;
			color: #888888;
			margin:23rpx 0 0 12rpx;
		}
	}
	
	  
</style>
