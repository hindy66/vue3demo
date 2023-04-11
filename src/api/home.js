/*
 * @Author: hindy 794310672@qq.com
 * @Date: 2023-03-07 09:32:18
 * @LastEditors: hindy 794310672@qq.com
 * @LastEditTime: 2023-03-07 14:41:53
 * @FilePath: \eribbit\src\api\home.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from "../request";
export const findBanner = () => {
    return request('/home/banner', 'get')
}

export const findNew = () => {
    return request('/home/new', 'get')
}

export const findHot = () => {
    return request('/home/hot', 'get')
}

export const findBrand = () => {
    return request('/home/brand', 'get', { limit: 10 })
}

export const findGoods = () => {
    return request('/home/goods', 'get')
}

export const findSpecial = () => {
    return request('/home/special', 'get')
}