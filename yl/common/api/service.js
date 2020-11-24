import Request from '@/utils/luch-request/index.js'
import session from "@/utils/session.js"


const getTokenStorage = () => {
  let token = ''
  try {
    token = session.getSession('token')
  } catch (e) {
  }
  return token
}

const test = new Request()
/**
 * 修改全局配置示例
 const test = new Request({
	header: {a:1}, // 举例
	baseURL: 'https://www.fastmock.site/mock/26243bdf9062eeae2848fc67603bda2d/luchrequest',
	validateStatus: (statusCode) => { // statusCode 必存在。此处示例为全局默认配置
		return statusCode >= 200 && statusCode < 300
	}
})
 test.config.baseURL = 'https://www.fastmock.site/mock/26243bdf9062eeae2848fc67603bda2d/luchrequest'
 **/

test.setConfig((config) => { /* 设置全局配置 */
  // config.baseURL = 'http://cris.ittun.co999999m'
  config.header = {
    ...config.header,
  }
  config.custom = {
    // auth: false, // 是否传token
    // loading: false // 是否使用loading
  }
  return config
})

test.interceptors.request.use((config) => { /* 请求之前拦截器。可以使用async await 做异步操作  */
  config.header = {
    ...config.header,
    a: 3 // 演示
  }
  /**
	 * custom {Object} - 自定义参数
	 */
  // if (config.custom.auth) {
  //   config.header.token = '123456'
  // }
  // if (config.custom.loading) {
  //   uni.showLoading()
  // }
  /*
  if (!token) { // 如果token不存在，return Promise.reject(config) 会取消本次请求
    return Promise.reject(config)
  }
  */
  return config
}, (config) => {
  return Promise.reject(config)
})


test.interceptors.response.use((response) => { /* 请求之后拦截器。可以使用async await 做异步操作  */
  // if (response.config.custom.loading) {
  //    uni.hideLoading()
  //  }
  if (response.data.code !== 200) { // 服务端返回的状态码不等于200，则reject()
    return Promise.reject(response)
  }
  return response
}, (response) => { // 请求错误做点什么。可以使用async await 做异步操作
  // if (response.config.custom.loading) {
  //    uni.hideLoading()
  //  }
  return Promise.reject(response)
})


const http = new Request({
	header:{
		 "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
	},
	
})
http.setConfig((config) => { /* 设置全局配置 */
  config.baseURL = 'https://cris.ittun.com' /* 根域名不同 */
  config.header = {
    ...config.header,
  }
  return config
})


http.interceptors.request.use((config) => { /* 请求之前拦截器。可以使用async await 做异步操作 */
  config.header = {
    ...config.header,
  }
  // console.log(config)
  /*
 if (!token) { // 如果token不存在，return Promise.reject(config) 会取消本次请求
   return Promise.reject(config)
 }
 */
  return config
}, (config) => {
  return Promise.reject(config)
})


http.interceptors.response.use(async (response) => { /* 请求之后拦截器。可以使用async await 做异步操作  */
  // console.log(response)
  if (response.statusCode !== 200) { // 服务端返回的状态码不等于200，则reject()
    return Promise.reject(response)
  }
  return response
}, (error) => { // 请求错误做点什么。可以使用async await 做异步操作
  console.log(error)
  let { response } =  error
  if(response){
	  //服务器最起码返回结果
	  switch(response.status){
		case 401://当前请求需要用户验证，一般是未登录
			break;
		case 403://服务器已经理解请求，但是拒绝执行，一般是token过期
			session.clearSession("token")
			//跳转到登录页
			break;
		case 404://请求失败，请求希望得到的资源服务器找不到
			break;
			
	  }
  }else{
	  //服务器连结果都没有返回
	  if(!window.navigator.onLine){
		  //断网处理
		  return
	  }
	  return Promise.reject(error)
  }
  return Promise.reject(response)
})

export {
  http,
  test
}
