import request from './request'
import type { ResponseType } from 'axios'

// 获取用户信息
export const getAllUser: () => Promise<ResponseType> = () => {
  return request.get('/api/users')
}

// 根据id删除用户
export const removeUserById: (id: number) => any = (id: number) => {
  return request({
    url: '/api/users/delete',
    method: 'delete',
    data: { id } as IBody,
  })
}

// 新增用户
export const insertUser: (user: IFormUser) => any = (user: IFormUser) => {
  return request.post('/api/users/insert', user)
}
