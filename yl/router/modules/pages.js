// router/modules/home.js
const home = [
	// {
	// 	path: ' ',
	// 	aliasPath:'/',
	// 	redirect: '/pages/login/login',
	// 	meta: {
	// 		title: '矿机666666',
	//     },
	// },
	{
        //注意：path必须跟pages.json中的地址对应，最前面别忘了加'/'哦
		path: '/pages/kj/kj',
		aliasPath:'/pages/kj/kj',  //对于h5端你必须在首页加上aliasPath并设置为/
		name: 'kj',
		meta: {
			title: '矿机666666',
			isLogined:true
	    },
    },
	{
	  path: '/pages/profit/profit',
	  aliasPath:'/pages/profit/profit',  //对于h5端你必须在首页加上aliasPath并设置为/
	  name: 'profit',
	    meta: {
	        title: '收益',
	    },
	},{
		path: '/pages/login/login',
		aliasPath:'/pages/login/login', 
		name: 'login',
		meta: {
			title: '登录',
	    },
	},{
		path: '/pages/login/forget',
		aliasPath:'/pages/login/forget', 
		name: 'forget',
		meta: {
			title: '找回密码',
	    },
	},{
		path: '/pages/login/register',
		aliasPath:'/pages/login/register', 
		name: 'register',
		meta: {
			title: '注册',
	    },
	},{
		path: '/pages/index/index',
		aliasPath:'/pages/index/index', 
		name: 'index',
		meta: {
			title: '首页',
	    },
	},{
		path: '/pages/dynamic/dynamic',
		aliasPath:'/pages/dynamic/dynamic', 
		name: 'dynamic',
		meta: {
			title: '动态',
	    },
	},{
		path: '/pages/profile/profile',
		aliasPath:'/pages/profile/profile', 
		name: 'profile',
		meta: {
			title: '我的',
	    },
	},{
		path: '/pages/profile/profile',
		aliasPath:'/pages/profile/profile', 
		name: 'profile',
		meta: {
			title: '我的',
	    },
	},{
		path: '/pages/personalData/personalData',
		aliasPath:'/pages/personalData/personalData', 
		name: 'personalData',
		meta: {
			title: '个人资料',
	    },
	},{
		path: '/pages/password/password',
		aliasPath:'/pages/password/password', 
		name: 'password',
		meta: {
			title: '修改密码',
	    },
	},{
		path: '/pages/manager/manager',
		aliasPath:'/pages/manager/manager', 
		name: 'manager',
		meta: {
			title: '资产管理',
	    },
	},{
		path: '/pages/about/about',
		aliasPath:'/pages/about/about', 
		name: 'about',
		meta: {
			title: '关于我们',
	    },
	},{
		path: '/pages/center/center',
		aliasPath:'/pages/center/center', 
		name: 'center',
		meta: {
			title: '帮助中心',
	    },
	},{
		path: '/pages/storage/storage',
		aliasPath:'/pages/storage/storage', 
		name: 'storage',
		meta: {
			title: '存储算力',
	    },
	},{
		path: '/pages/avatar/avatar',
		aliasPath:'/pages/avatar/avatar', 
		name: 'avatar',
		meta: {
			title: 't头像上传',
	    },
	},{
	    path: '*',
		redirect: { name: 'login' }
	}
]
export default home