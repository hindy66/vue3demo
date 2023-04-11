<template>
    <div class="home-banner">
      <Carousel  :sliders="sliders" autoPlay/>
    </div>
  </template>
  <script>
import { ref } from 'vue';
  import { findBanner } from '../../../api/home';
  export default {
    name: 'HomeBanner',
    setup() {
        const sliders = ref([])
        findBanner().then(data => {
            console.log(data)
            if (data?.result) {
                sliders.value = data.result
            }
        })
        return { 
            sliders
        }
    }
  }
  </script>
  <style scoped lang="scss">
  .home-banner {
    width: 1240px;
    height: 500px;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
  }
  .xtx-carousel {
  :deep(.carousel-btn.prev) {
    left: 270px;
  }
  :deep(.carousel-indicator) {
    padding-left: 250px;
  }
}
  </style>