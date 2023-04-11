<template>
    <HomePanel title="最新专题">
        <template v-slot:right><More /></template>
        <div class="special-list" ref="target">
            <div class="special-item hover-shadow" v-for="item in list" :key="item.id">
                <RouterLink to="/">
                    <img :src="item.cover" alt />
                    <div class="meta">
                        <p class="title">
                            {{ item.title }}<small>{{ item.summary }}</small>
                        </p>
                        <span class="price">&yen;{{ item.lowestPrice }}起</span>
                    </div>
                </RouterLink>
                <div class="foot">
                    <span class="like"
                        ><i class="iconfont icon-cainixihuan"></i
                        >{{ item.collectNum }}</span
                    >
                    <span class="view"
                        ><i class="iconfont icon-xianshi"></i
                        >{{ item.viewNum }}</span
                    >
                    <span class="reply"
                        ><i class="iconfont icon-xiaoxichufa"></i
                        >{{ item.replyNum }}</span
                    >
                </div>
            </div>
        </div>
    </HomePanel>
</template>
  
  <script>
import HomePanel from "./HomePanel.vue";
import { findSpecial } from "@/api/home";
import { useLazyData } from "@/hooks";
import { ref } from 'vue';
export default {
    name: "HomeSpecial",
    components: { HomePanel },
    setup() {
        const data = ref(null)
        let fn = () => {
            findSpecial().then(res => {
                data.value = res.result
                console.log('触发then >>>', data)
            })
        }
        const { target } = useLazyData(fn);
        return { target, list: data };
    },
    mounted() {
       console.log('con >>', this.list)
    }
};
</script>
  
  <style scoped lang='scss'>
.home-panel {
    background: #f5f5f5;
}
.special-list {
    height: 380px;
    padding-bottom: 20px;
    display: flex;
    justify-content: space-between;
    .special-item {
        width: 404px;
        background: #fff;
        a {
            display: block;
            width: 100%;
            height: 288px;
            position: relative;
            img {
                width: 100%;
                height: 100%;
            }
            .meta {
                background-image: linear-gradient(
                    to top,
                    rgba(0, 0, 0, 0.8),
                    transparent 50%
                );
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 288px;
                .title {
                    position: absolute;
                    bottom: 0px;
                    left: 0;
                    padding-left: 16px;
                    width: 70%;
                    height: 70px;
                    .top {
                        color: #fff;
                        font-size: 22px;
                        display: block;
                    }
                    .sub {
                        display: block;
                        font-size: 19px;
                        color: #999;
                    }
                }
                .price {
                    position: absolute;
                    bottom: 25px;
                    right: 16px;
                    line-height: 1;
                    padding: 4px 8px 4px 7px;
                    color: var(--priceColor);
                    font-size: 17px;
                    background-color: #fff;
                    border-radius: 2px;
                }
            }
        }
        .foot {
            height: 72px;
            line-height: 72px;
            padding: 0 20px;
            font-size: 16px;

            i {
                display: inline-block;
                width: 15px;
                height: 14px;
                margin-right: 5px;
                color: #999;
            }
            .like,
            .view {
                float: left;
                margin-right: 25px;
                vertical-align: middle;
            }
            .reply {
                float: right;
                vertical-align: middle;
            }
        }
    }
}
</style>
  