<template>
    <div class="home-new">
        <HomePanel title="新鲜好物" sub-title="新鲜出炉 品质靠谱">
            <template #right><More path="/" /></template>
            <div style="position: relative;height: 406px;" ref="target">
                <!-- 面板内容 -->
                <Transition name="fade">
                    <ul v-if="goods.length" ref="pannel" class="goods-list">
                        <li class="hover-shadow" v-for="item in goods" :key="item.id">
                            <RouterLink :to="`/product/${item.id}`">
                                <img :src="item.picture" alt="" />
                                <p class="name ellipsis">{{ item.name }}</p>
                                <p class="price">&yen;{{ item.price }}</p>
                            </RouterLink>
                        </li>
                    </ul>
                    <HomeSkeleton bg="#f0f9f4" v-else />
                </Transition>
            </div>
        </HomePanel>
    </div>
</template>
  <script>
import { ref } from "vue";
import HomePanel from "./HomePanel.vue";
import HomeSkeleton from "./HomeSkeleton.vue";
import { findNew } from "@/api/home";
import { useLazyData }from "@/hooks"
export default {
    name: "HomeNew",
    components: { HomePanel, HomeSkeleton },
    setup() {
        const goods = ref([]);
        const box = ref(null)
        let fn = () => {
            findNew().then((data) => {
                goods.value = data.result;
            });
        }
        const { target, result } = useLazyData(fn)
        return { goods, result, target };
    },
};
</script>
  <style scoped lang="scss">
.goods-list {
    display: flex;
    justify-content: space-between;
    height: 406px;
    li {
        width: 306px;
        height: 406px;
        background: #f0f9f4;
        img {
            width: 306px;
            height: 306px;
        }
        p {
            font-size: 22px;
            padding: 12px 30px 0 30px;
            text-align: center;
        }
        .price {
            color: var(--priceColor);
        }
    }
}
</style>