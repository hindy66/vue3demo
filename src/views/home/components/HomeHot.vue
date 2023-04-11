<template>
    <HomePanel title="人气推荐" sub-title="人气爆款 不容错过">
        <div style="position: relative; height: 426px" ref="target">
            <Transition name="fade">
                <ul v-if="goods.length" ref="pannel" class="goods-list">
                    <li
                        class="hover-shadow"
                        v-for="item in goods"
                        :key="item.id"
                    >
                        <RouterLink to="/">
                            <img :src="item.picture" alt="" />
                            <p class="name">{{ item.title }}</p>
                            <p class="desc">{{ item.alt }}</p>
                        </RouterLink>
                    </li>
                </ul>
                <HomeSkeleton v-else />
            </Transition>
        </div>
    </HomePanel>
</template>
  
  <script>
import { ref } from "vue";
import HomePanel from "./HomePanel.vue";
import { findHot } from "@/api/home";
import { useLazyData } from "@/hooks";  
export default {
    name: "HomeHot",
    components: { HomePanel },
    setup() {
        const goods = ref([]);
        let fn = () => {
            findHot().then((data) => {
                goods.value = data.result;
            });
        } 
        const { target, result } = useLazyData(fn)
        return { goods, target, result };
    },
};
</script>
  
  <style scoped lang='scss'>
.goods-list {
    display: flex;
    justify-content: space-between;
    height: 426px;
    li {
        width: 306px;
        height: 406px;
        img {
            width: 306px;
            height: 306px;
        }
        p {
            font-size: 22px;
            padding-top: 12px;
            text-align: center;
        }
        .desc {
            color: #999;
            font-size: 18px;
        }
    }
}
</style>