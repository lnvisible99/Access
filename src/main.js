// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
import App from './App'
import store from '../store/store.js';
import '../directive/v-permissions';

Vue.config.productionTip = false
// console.log(store.getters.getMenuList)
Vue.prototype.store = store;
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>'
})
