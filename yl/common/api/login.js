import {
  http
} from '@/common/api/service.js'


// console.log(http)

//发送短信
export const sendMessage = (data) => {
  return http.post('/aUser/sendMessage',data)
}

//手机短信登录

export const messageLogin = (data) => {
  return http.post("/aUser/messageLogin",data)
}
