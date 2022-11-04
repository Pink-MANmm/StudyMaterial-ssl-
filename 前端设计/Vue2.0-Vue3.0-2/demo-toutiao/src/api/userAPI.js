import request from '@/utils/request.js'

//注意：下面的接口调用，只是纯粹的演示，因为服务器没有提供/user这个接口
export const getArticleListAPI = function(_page, _limit) {
  return request.get('/user')
}