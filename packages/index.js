import VctIcon from "./VctIcon/VctIcon.vue";

// 为组件提供 install 安装方法，供按需引入
VctIcon.install = (Vue) => {
  Vue.component(VctIcon.name, VctIcon);
};

// 默认导出组件
export default VctIcon;
