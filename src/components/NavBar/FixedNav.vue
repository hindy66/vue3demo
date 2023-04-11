<!-- 轮播图上的导航 -->
<template>
    <div class="home-category">
        <ul class="menu">
            <li
                v-for="item in menuList"
                :key="item.id"
                @mouseenter="categoryId = item.id"
            >
                <RouterLink :to="`/category/${item.id}`">{{
                    item.name
                }}</RouterLink>
                <template v-if="item.children">
                    <RouterLink
                        v-for="sub in item.children"
                        :key="sub.id"
                        :to="`/category/sub/${sub.id}`"
                    >
                        {{ sub.name }}
                    </RouterLink>
                </template>
                <!-- 骨架 -->
                <template v-else>
                    <Skeleton
                        width="60px"
                        height="18px"
                        style="margin-right: 5px"
                        bg="rgba(255,255,255,0.2)"
                    />
                    <Skeleton
                        width="50px"
                        height="18px"
                        bg="rgba(255,255,255,0.2)"
                    />
                </template>
            </li>
        </ul>
        <!-- 弹层 -->
        <div class="layer">
            <h4>分类推荐 <small>根据您的购买或浏览记录推荐</small></h4>
            <!-- 商品 -->
            <ul v-if="curCategory?.goods?.length">
                <li v-for="i in curCategory.goods" :key="i">
                    <RouterLink to="/">
                        <img :src="i.picture" alt="" />
                        <div class="info">
                            <p class="name ellipsis-2">{{ i.name }}</p>
                            <p class="desc ellipsis">{{ i.desc }}</p>
                            <p class="price"><i>¥</i>{{ i.price }}</p>
                        </div>
                    </RouterLink>
                </li>
            </ul>
            <!-- 推荐品牌 -->
            <ul
                v-else-if="
                    curCategory &&
                    curCategory?.brands?.length
                "
            >
                <li
                    class="brand"
                    v-for="item in curCategory.brands"
                    :key="item.id"
                >
                    <RouterLink to="/">
                        <img :src="item.picture" alt="" />
                        <div class="info">
                            <p class="place">
                                <i class="iconfont icon-dingwei"></i
                                >{{ item.place }}
                            </p>
                            <p class="name ellipsis">{{ item.name }}</p>
                            <p class="desc ellipsis-2">{{ item.desc }}</p>
                        </div>
                    </RouterLink>
                </li>
            </ul>
        </div>
    </div>
</template>
  
<script>
import { ref, reactive, computed } from "vue";
import { storeToRefs } from "pinia";
import { useCategoryStore } from "@/stores/modules/category.js";
import { findBrand } from "@/api/category.js";
export default {
    name: "FixedNav",

    // 1. 获取vuex的一级分类，并且只需要两个二级分类
    // 2. 需要在组件内部，定义一个品牌数据
    // 3. 根据vuex的分类数据和组件中定义品牌数据，得到左侧分类完整数据(9分类+1品牌)数组
    // 4. 进行渲染即可
    setup() {
        const store = useCategoryStore();
        const { menuList } = storeToRefs(store);
        const categoryId = ref(null);
        // 获取当前分类逻辑
        const curCategory = computed(() => {
            return menuList.value.find((item) => item.id === categoryId.value);
        });
        // 请求品牌数据
        findBrand(9).then(({ result }) => {
            if (result) {
                store.setBrands(result);
            }
        });
        return { categoryId, curCategory, store, menuList };
    },
};
</script>
  
<style scoped lang='scss'>
.home-category {
    width: 250px;
    height: 500px;
    background: rgba(0, 0, 0, 0.8);
    position: relative;
    z-index: 2;
    .menu {
        li {
            padding-left: 40px;
            height: 50px;
            line-height: 50px;
            &:hover {
                background: var(--xtxColor);
            }
            a {
                margin-right: 4px;
                color: #fff;
                &:first-child {
                    font-size: 16px;
                }
            }
        }
    }
    .layer {
        width: 990px;
        height: 500px;
        background-color: rgba(255, 255, 255, 0.2);
        // 毛玻璃效果
        backdrop-filter: blur(10px);
        position: absolute;
        left: 250px;
        top: 0;
        display: none;
        padding: 0 15px;
        h4 {
            font-size: 20px;
            font-weight: normal;
            line-height: 80px;
            small {
                font-size: 16px;
                color: #666;
            }
        }
        ul {
            display: flex;
            flex-wrap: wrap;
            li {
                width: 310px;
                height: 120px;
                margin-right: 15px;
                margin-bottom: 15px;
                border: 1px solid #eee;
                border-radius: 4px;
                background: #fff;
                &:nth-child(3n) {
                    margin-right: 0;
                }
                a {
                    display: flex;
                    width: 100%;
                    height: 100%;
                    align-items: center;
                    padding: 10px;
                    &:hover {
                        background: #e3f9f4;
                    }
                    img {
                        width: 95px;
                        height: 95px;
                    }
                    .info {
                        padding-left: 10px;
                        line-height: 24px;
                        width: 190px;
                        .name {
                            font-size: 16px;
                            color: #666;
                        }
                        .desc {
                            color: #999;
                        }
                        .price {
                            font-size: 22px;
                            color: var(--priceColor);
                            i {
                                font-size: 16px;
                            }
                        }
                    }
                }
            }
        }
    }
    &:hover {
        .layer {
            display: block;
        }
    }

    .xtx-skeleton {
        animation: fade 1s linear infinite alternate;
    }
    @keyframes fade {
        from {
            opacity: 0.2;
        }
        to {
            opacity: 1;
        }
    }
}
</style>