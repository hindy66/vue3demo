/*
 * @Author: hindy 794310672@qq.com
 * @Date: 2023-02-17 09:49:06
 * @LastEditors: hindy 794310672@qq.com
 * @LastEditTime: 2023-02-28 15:40:37
 * @FilePath: \eribbit\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // 一级路由布局容器
      path: '/',
      name: 'Layout',
      component: () => import('@/views/layout/Layout.vue'),
      children: [
        {
          path: '/',
          redirect: '/home',
          name: 'Home',
          component: () => import('@/views/home/index.vue'),
          children: [
            {
              path: '/home',
              name: 'HomeNormal',
              component: () => import('@/views/home/normal.vue')
            },
          ]
        },
        {
          path: '/category/:id',
          name: 'category',
          component: () => import('@/views/category/index.vue')
        },
        {
          path: '/category/sub/:id',
          name: 'category',
          component: () => import('@/views/category/Sub.vue')
        }  
      ]
    }
  ]
})

export default router
