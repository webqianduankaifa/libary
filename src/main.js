// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
 import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
 // import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
import axios from 'axios'
Vue.prototype.$axios = axios

import qs from 'qs'
Vue.prototype.qs = qs
axios.interceptors.request.use((config) => {
// 在发送请求之前做某件事

  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  } else if (config.method === 'get') {
    config.data = qs.parse(config.data)
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,

  components: { App },
  template: '<App/>'
})
