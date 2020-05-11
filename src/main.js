// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入ElementUI
import ElementUI from 'element-ui'
// 引入font-awesome
import 'font-awesome/css/font-awesome.min.css'
// 引入自定义主题
import './assets/theme/element-#D9A65F/index.css'
Vue.config.productionTip = false

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
