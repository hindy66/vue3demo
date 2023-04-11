<template>
  <ul class="app-header-nav">
    <li class="home"><RouterLink to="/">首页</RouterLink></li>
    <li @mouseenter="categoryStore.show(item)" @mouseleave="categoryStore.hide(item)" v-for="item in navList" :key="item.key">
      <router-link @click="categoryStore.hide(item)" :to="'/category/' + item.id">{{item.name}}</router-link>
      <div class="layer" :class="{'open': item.open}">
        <ul>
          <li v-for="c in item.children" :key="c.id">
            <router-link @click="categoryStore.hide(item)" :to="'/category/sub/' + item.id">
              <img
                :src="c.picture"
                alt=""
              />
              <p>{{c.name}}</p>
            </router-link>
          </li>
        </ul>
      </div>
    </li>
    <!-- <li><a href="#">餐厨</a></li>
      <li><a href="#">艺术</a></li>
      <li><a href="#">电器</a></li>
      <li><a href="#">居家</a></li>
      <li><a href="#">洗护</a></li>
      <li><a href="#">孕婴</a></li>
      <li><a href="#">服装</a></li>
      <li><a href="#">杂货</a></li> -->
  </ul>
</template>
  
<script>
import { useCategoryStore } from '@/stores/modules/category.js'
import { useWindowScroll } from '@vueuse/core'
export default {
    name: 'NavWithSon',
    props: {
        navList: {
            type:Array
        }
    },
    setup() {
      const categoryStore = useCategoryStore()
      return {
        categoryStore,
      }
    }
};
</script>
  
  <style scoped lang='scss'>
.app-header-nav {
  width: 820px;
  display: flex;
  justify-content: space-around;
  padding-left: 40px;
  position: relative;
  z-index: 998;
  > li {
    margin-right: 40px;
    width: 38px;
    text-align: center;
    > a {
      font-size: 16px;
      line-height: 32px;
      height: 32px;
      display: inline-block;
    }
    &:hover {
      > a {
        color: var(--xtxColor);
        border-bottom: 1px solid var(--xtxColor);
      }
    }
  }
}
.layer {
  &.open {
    height: 132px;
    opacity: 1;
  }
  width: 1240px;
  background-color: #fff;
  position: absolute;
  left: -200px;
  top: 56px;
  height: 0;
  overflow: hidden;
  opacity: 0;
  box-shadow: 0 0 5px #ccc;
  transition: all 0.2s 0.1s;
  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0 70px;
    align-items: center;
    height: 132px;
    li {
      width: 110px;
      text-align: center;
      img {
        width: 60px;
        height: 60px;
      }
      p {
        padding-top: 10px;
      }
      &:hover {
        p {
          color: var(--xtxColor);
        }
      }
    }
  }
}
</style>
  