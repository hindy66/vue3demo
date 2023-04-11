<!--
 * @Author: hindy 794310672@qq.com
 * @Date: 2023-02-17 09:49:06
 * @LastEditors: hindy 794310672@qq.com
 * @LastEditTime: 2023-02-24 10:20:16
 * @FilePath: \eribbit\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="app-container">
        <RouterView />
    </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";

import { useStore }  from "./stores/index";
import request  from "@/request/index";

const store = useStore();
const handleChange = function () {
    store.userStore.setProfile({
        nickName: "test",
    });
    //测试请求
    request('/member/profile', 'get', { a: 10 }).then((res) => {
        console.log(res)
    })
};
defineExpose({
    store,
});
</script>


<style lang="scss" scoped>
@import "@/assets/style/main.scss";
.app-container { 
    width: 100%; height: 100vh;
    // 滚动条宽度
    &::-webkit-scrollbar {
        width: 10px;
    }
    &::-webkit-scrollbar-thumb {
        background: #ccc; // 滑块颜色
        border-radius: 5px; // 滑块圆角
    }

    &::-webkit-scrollbar-thumb:hover {
        background: lightblue // 鼠标移入滑块变红
    }
}
</style>
