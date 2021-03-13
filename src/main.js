import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import '../style/theme/index.css';
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.http.options.xhr = { withCredentials: true }

new Vue({
  el: '#app',
  render: h => h(App),
}).$mount('#app')
