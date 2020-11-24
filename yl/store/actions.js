import {apis} from "@/common/Request"

console.log(apis)

// var muke = api.apis


export  default{
	setUserInfo(){
		console.log(123)
	},
	login(context,requestData){
		return new Promise((resolve,reject)=>{
			console.log(api)
			
			muke.login(requestData).then(res=>{
				resolve(res)
			}).catch(err=>{
				console.log(err)
			})
		})	
	}
}	
