/*
 * @Author: hindy 794310672@qq.com
 * @Date: 2023-02-17 09:49:06
 * @LastEditors: hindy 794310672@qq.com
 * @LastEditTime: 2023-03-06 17:11:42
 * @FilePath: \eribbit\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import './assets/style/main.scss';
import './assets/main.css';
// 重置样式表
import 'normalize.css';
import '@/assets/style/common.scss';

// 引入iconfont
import '@/assets/style/iconfont/iconfont.css';
import Skeleton from '@/components/library'


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Skeleton)
app.mount('#app')
