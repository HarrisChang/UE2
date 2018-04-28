// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Fetch from '../utils/fetch'
import ElementUI from 'element-ui'
import App from './App'
import router from './router'
import MavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(MavonEditor);

Vue.prototype.$http = Fetch;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
