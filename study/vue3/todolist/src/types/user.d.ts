// 获取展示的用户信息
interface IUser {
  readonly id: number
  name: string
  avatar: string
  sex: number
  age: number
}

// 填写的表单信息
interface IFormUser {
  name: string
  password: string
  sex: number
  age: number
}

interface IBody {
  id?: number
}

interface IData<T> {
  code: number
  msg: string
  data?: T
}
