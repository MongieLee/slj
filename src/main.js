import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './main.scss'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import C from 'vcolorpicker'
Vue.use(Antd)
Vue.use(C)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
