// 导入组件
import deButton from './button';
// 储存组件列表
const components = [
    deButton
]
// 定义install 方法接受Vue作为参数
const install = function (Vue) {
    // 判断是否安装
    if(install.installed) return
    // 遍历注册全局组件
    components.map(component => Vue.component(component.name,component))
}
// 判断是否是直接引入文件
if(!!window && window.vue) {
    install(window.Vue)
}
export default {
    install,
    ...components
}