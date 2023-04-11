<template>
   <div class="home-normal">
        <div class="entry">
            <div class="container">
                <!-- 左侧分类 -->
                <FixedNav></FixedNav>
                <!-- 轮播图 -->
                <HomeBanner></HomeBanner>
                <HomeNew></HomeNew>
                <!-- 人气推荐 -->
                <HomeHot></HomeHot>
                <!-- 热门品牌 -->
                <HomeBrand></HomeBrand>
                <!-- 商品区域 -->
                <HomeProduct></HomeProduct>
                <!-- 最新专题 -->
                <HomeSpecial></HomeSpecial>
            </div>
        </div>
    </div>
</template>

<script>
import FixedNav from '@/components/NavBar/FixedNav.vue';
import HomeBanner from './components/HomeBanner.vue'
import HomeHot from './components/HomeHot.vue';
import HomeNew from './components/HomeNew.vue';
import HomeBrand from './components/HomeBrand.vue';
import HomeProduct from './components/HomeProduct.vue';
import HomeSpecial from './components/HomeSpecial.vue';
export default {
    name: 'HomeNormal',
    components: {
    FixedNav,
    HomeBanner,
    HomeNew,
    HomeHot,
    HomeBrand,
    HomeProduct,
    HomeSpecial
}
}
</script>

<style>

</style>