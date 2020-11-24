import Vue from 'vue'
import Vuex from 'vuex'



import mutations from "./mutations.js"
// import actions from "./actions.js"
import login from "./modules/login.js"
// import getters from "./getters.js"



Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		userInfo:{
			phone:"",
			token:""
		}
	},
	mutations,
	// actions,
	// modules:{
	// 	login
	// }
})

export default store
