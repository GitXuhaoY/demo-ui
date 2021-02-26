import deButton from './src/index.vue';
deButton.install = function (Vue) {
    Vue.component(deButton.name,deButton);
}
export default deButton;