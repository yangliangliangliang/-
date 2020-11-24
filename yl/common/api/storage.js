import {
  http
} from '@/common/api/service.js'



//根据id查询商品服务器的详情
export const selectCommodityById = (data) => {
  return http.post('/commodity/selectCommodityById',data)
}

