<!--
 * @Author: hindy 794310672@qq.com
 * @Date: 2023-02-21 09:39:08
 * @LastEditors: hindy 794310672@qq.com
 * @LastEditTime: 2023-02-28 15:37:42
 * @FilePath: \eribbit\src\views\home\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="home-container">
        <!-- 顶部通栏 -->
        <AppTopNav></AppTopNav>
        <AppHeader></AppHeader>
        <!-- 头部组件 -->
        <header>
        </header>
        <!-- 内容容器 -->
        <div class="main">
            <router-view></router-view>
        </div>
        <!-- 底部组件 -->
        <footer></footer>
    </div>
</template>

<script>
import AppTopNav from "@/components/NavBar/index.vue";
import AppHeader from "@/components/Header/index.vue"
export default {
    name: 'HomePage',
    components: {
        AppTopNav,
        AppHeader
    }
}
</script>

<style lang="scss" scoped>
.home-container {
    height: 100vh; position: relative; overflow: auto;
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
.banner { height: 1000px; }
</style>