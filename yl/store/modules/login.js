export default {
	state: { },
	mutations: {
		setUserData(state,data){
			state.app = {
				userData:data
			}
		},
		logout(state) {
			state.userName = "";
			state.hasLogin = false;
		}
	},
	actions:{
		//首页登陆
		login(context,requestData){
			console.log(123)
			return new Promise((resolve,reject)=>{
				this.$minApi.login(requestData).then(res=>{
					resolve(resolve)
				}).catch(err=>{
					console.log(err)
				})
			})
		}
	}
}