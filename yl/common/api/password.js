import {
  http
} from '@/common/api/service.js'


//修改头像
export const updateavatar = (data) => {
  return http.post('/aUser/updateavatar',data)
}

//修改密码
export const updatePassword = (data) => {
  return http.post('/aUser/updatePassword',data)
}

