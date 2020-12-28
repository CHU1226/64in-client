import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'element-ui/lib/theme-chalk/index.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueSimpleSVG from 'vue-simple-svg'
import {InlineSvgPlugin} from 'vue-inline-svg';
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueAxios, axios)
Vue.use(InlineSvgPlugin);
Vue.use(VueSimpleSVG)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
