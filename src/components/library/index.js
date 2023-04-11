import XtxSkeleton from './skeleton.vue'
import XtxCarousel from './carousel.vue'
import XtxMore from './more.vue'
import XtxBread from './bread.vue'
import XtxBreadItem from './breaditem.vue'
import defaultImg from '@/assets/images/200.png'
// 当你在mian.js导入，使用Vue.use()  (vue3.0 app)的时候就会执行install函数

// 导入library文件夹下的所有组件
// 批量导入需要使用一个函数 require.context(dir,deep,matching)
// 参数：1. 目录  2. 是否加载子目录  3. 加载的正则匹配 
// const importFn = require.context('./', false, /\.vue$/)
export default {
    install(app) {
        app.component(XtxSkeleton.name, XtxSkeleton)
        app.component(XtxCarousel.name, XtxCarousel)
        app.component(XtxMore.name, XtxMore)
        app.component(XtxBread.name, XtxBread)
        app.component(XtxBreadItem.name, XtxBreadItem)
        defineDirective(app)

        // console.log('importFn >>', importFn)
        // // 批量注册全局组件
        // importFn.keys().forEach(key => {
        //     // 导入组件
        //     const component = importFn(key).default
        //     // 注册组件
        //     app.component(component.name, component)
        // })
  
      // 定义指令
      defineDirective(app)
    }
}
// 指令
const defineDirective = (app) => {
    // 图片懒加载指令
    app.directive('lazyload', {
        mounted(el, binding) {
            const observer = new IntersectionObserver(([{ isIntersecting }]) => {
                if (isIntersecting) {
                    observer.unobserve(el)
                    el.onerror = () => {
                        el.src = defaultImg
                    }
                    el.src = binding.value
                }
            }, {
                threshold: 0.01
            })
            observer.observe(el)
        }
    })
}