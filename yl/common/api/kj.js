import {
  http
} from '@/common/api/service.js'



//关于我们
export const selectAllCommodity = (data) => {
  return http.post('/commodity/selectAllCommodity',data)
}

