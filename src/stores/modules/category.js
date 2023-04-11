import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import { topCategory } from '@/api/constants'

export const useCategoryStore = defineStore('categoryStore', () => {
    const brand = reactive({
        id: "brand",
        name: "品牌",
        children: [{ id: "brand-chilren", name: "品牌推荐" }],
        brands: []
    });
    let list = ref(topCategory)
    let menuList = computed(() => {
        let formatList = list.value?.length ? list.value.map((item) => {
            return {
                id: item.id,
                name: item.name,
                // 防止初始化没有children的时候调用slice函数报错
                children: item.children && item.children.slice(0, 2),
                goods: item.goods
            };
        }) : []
        formatList.push(brand);
        return formatList
    })

    function setList (data) {
        list.value = data
    }
    function setBrands (data) {
        brand.brands = data
    }
    // 定义二级类目显示和隐藏
    function show (cateObj) {
        if (!list.value.length) {
            return
        }
        let target = list.value.find(c => c.id && c.id == cateObj.id) 
        if (target) {
            target.open = true
        }
    }
    function hide (cateObj) {
        if (!list.value.length) {
            return
        }
        let target = list.value.find(c => c.id && c.id == cateObj.id) 
        if (target) {
            target.open = false
        }
    }
    return {
        brand,
        list,
        menuList,
        setList,
        setBrands,
        show,
        hide
    }
})
