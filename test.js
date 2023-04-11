function deepClone(source) {
    //判断source是不是对象
    if (!source instanceof Object) return source
     //根据source类型初始化结果变量    let target = Array.isArray(source) ? [] : {};
    let target = Array.isArray(source) ? [] : {}
    for(let key in source) {
        if (typeof source[key] == 'object') {
            target[key] = deepClone(source[key])
        } else {
            target[key] = source[key]
        }
    } 
    return target
}

function debounce(func, wait) {
    let timer = null
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            func()
        }, wait)
    }
}
function ttt() {  }
let fuc = debounce(ttt, 3000)
fuc(23423432)