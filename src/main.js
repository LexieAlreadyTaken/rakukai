import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import '../style/theme/index.css';
import VueResource from 'vue-resource'
import App from './App.vue'
import axios from 'axios'
import Qs from 'qs'

var axios_instance = axios.create({
  transformRequest:[function(data){
    data = Qs.stringify(data);
    return data;
  }],
  headers:{'Content-Type':'application/x-www-form-urlencoded'}
})

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(axios_instance)
Vue.http.options.xhr = { withCredentials: true }

new Vue({
  el: '#app',
  render: h => h(App),
}).$mount('#app')
