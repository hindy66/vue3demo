/*
 * @Author: hindy 794310672@qq.com
 * @Date: 2023-02-17 17:00:12
 * @LastEditors: hindy 794310672@qq.com
 * @LastEditTime: 2023-03-06 17:04:38
 * @FilePath: \eribbit\src\request\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from 'axios'
import { useUserStore } from '../stores/modules/user'
import router  from '../router/index'

const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net'
// 设置timeout baseUrl
const request = axios.create({
    baseURL,
    timeOut: 9000
})

// 请求拦截器
request.interceptors.request.use(config => {
    const userStore = useUserStore()
    //如果本地有token携带本地token
    // 从store中取本地信息
    if (userStore?.profile?.token) {
        config.headers.Authorization = userStore.profile.token
    }
    return config
}, err => {
    return Promise.reject(err)
})

// 响应拦截器
request.interceptors.response.use((response) => {
    // 取出data数据，将来调用接口的时候直接拿到就是后台的数据
    return response.data
}, err => {
    const userStore = useUserStore()
    // 如果401状态码，进入该函数
    if (err.response && err?.response?.status === 401) {
        // 1.清空本地无效用户信息
        userStore.setProfile({})
        // 2.转跳到登录页面
        router.push(`/logion?redirectUrl=${router.currentRoute.fullPath}`)
        // 3.转跳需要传参（当前路由地址）给登录页
        
    }
    return Promise.reject(err)
})

// 请求工具函数
export default (url, method, params) => {
    method = method.toLocaleLowerCase()
    const methodMap = new Map([
        ['get','params'],
        ['post', 'data']
    ])
    return request({
        url,
        method,
        [methodMap.get(method)]: params
    })
}