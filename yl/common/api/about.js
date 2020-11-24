import {
  http
} from '@/common/api/service.js'



//关于我们
export const selectAbouts = (data) => {
  return http.post('/abouts/selectAbouts',data)
}

