<script>
	export default {
		onLaunch: function() {
			console.log('App Launch');
			console.log(15210600213)
		},
		onShow: function() {
			console.log('App Show');
			// console.log(this.$Router)
		},
		onHide: function() {
			console.log('App Hide');
		},
		// watch:{
		// 	name(newVal){
				
		// 	}
		// }
		// computed:{
		// 	name(){
		// 		return 
		// 	}
		// }
		
		// console.log(process.env.NODE_ENV)
	};
</script>

<style>
	/*每个页面公共css */
	@import './common/uni.css';
	@import './common/qiun.css';
	
	html,body{
		/* font-size: 100px !important; */
		background: #F4F4F4;
	}
	::-webkit-scrollbar
	{ 
	    /* overflow: hidden; */
		display: none;
	} 

	
	/* 解决头条小程序组件内引入字体不生效的问题 */
	/* #ifdef MP-TOUTIAO */
	@font-face {
		font-family: uniicons;
		
	}
	/* #endif */
</style>
