<!--
 * @Author: hindy 794310672@qq.com
 * @Date: 2023-02-21 17:28:48
 * @LastEditors: hindy 794310672@qq.com
 * @LastEditTime: 2023-02-24 10:52:51
 * @FilePath: \eribbit\src\components\Header\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="app-header">
        <div class="container">
            <h1 class="logo">
                <a href="#/"></a>
            </h1>
           <NavWithSon :navList="categoryStore.list"/>
            <!-- <ul class="type-list">
                <li><a href="#/">首页</a></li>
                <li><a href="#/">居家</a></li>
                <li><a href="#/">美食</a></li>
                <li><a href="#/">服饰</a></li>
                <li><a href="#/">母婴</a></li>
                <li><a href="#/">个护</a></li>
                <li><a href="#/">严选</a></li>
                <li><a href="#/">数码</a></li>
                <li><a href="#/">运动</a></li>
                <li><a href="#/">杂项</a></li>
            </ul> -->
            <div class="search">
                <i class="iconfont icon-dagang-tongyong"></i>
                <input type="text" placeholder="搜一搜"/>
            </div>
            <div class="cart">
                <a href="#/cart">
                    <i class="iconfont icon-gouwuche"></i>
                    <em class="total"></em>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import  NavWithSon from './NavWithSon.vue'
import { findAllCateGory } from '@/api/category.js'
import { reactive } from "vue";
import { useCategoryStore } from '@/stores/modules/category';
export default {
    name: 'AppHeader',
    components: {
        NavWithSon
    },
    setup() {
        const categoryStore = useCategoryStore()
        findAllCateGory().then(({ result }) => {
            if (result?.length) {
                categoryStore.setList(result)
                // 给每一个一级分类定义控制显示隐藏的数据，open布尔类型，通过open设置类名控制显示隐藏
                result.map(item => {
                    item.open = false
                    return item
                })
            }
        })
        return {
            categoryStore
        }
    }
    
}
</script>

<style lang="scss" scoped>
    .app-header { 
        background: white; position: sticky; top: 0; z-index: 3; transition: all linear .5s;
    }
    .container { display: flex; align-items: center; }
    .logo { 
        width: 200px; 
        a  { display: block; height: 132px; background-image: url("@/assets/images/logo.png"); background-position: center 18px; background-repeat: no-repeat; background-size: contain; } 
    }
    .type-list { 
        display: flex; align-items: center; padding-left: 40px;
        li {  margin-right: 40px; }
        a { 
            display: block; height: 32px; line-height: 32px; font-size: 16px;
            &:hover { color: var(--xtxColor); border-bottom: 1px solid var(--xtxColor); }
        }
    }
    .search { 
        height: 32px; width: 170px; line-height: 32px; 
        input { width: 140px; padding: 5px; color: #666; } 
    }
    .cart { 
        width: 50px; text-align: center;
        .icon-gouwuche { font-size: 22px; } 
    }
</style>