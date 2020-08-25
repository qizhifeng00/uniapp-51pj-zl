import Vue from 'vue'
import App from './App'
import store from './store'

//阻止生成生产信息
Vue.config.productionTip = false

//避免vue与小程序调用冲突
App.mpType = 'app'

const app = new Vue({
  ...App,
  store
})
app.$mount()
