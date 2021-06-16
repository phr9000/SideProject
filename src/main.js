import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Antd from "ant-design-vue";
import 'ant-design-vue/dist/antd.css';

Vue.use(VueRouter)

// // 안트 디자인 전역 설정
Vue.use(Antd);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
