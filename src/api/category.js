import request from "@/request/index.js";

// 获取头部分类数据
export const findAllCateGory = () => {
    return request('/home/category/head', 'get')
}

// 获取分类当中的品牌数据
export const findBrand= (limit) => {
    return request('/home/brand', 'get', {limit})
}