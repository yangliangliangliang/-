import {
  http
} from '@/common/api/service.js'


// console.log(http)

//根据token获取当前用户的资料
export const showUser = (data) => {
  return http.post('/aUser/showUser',data)
}

