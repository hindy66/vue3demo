import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cartStore', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  const userInfo = reactive({})
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
