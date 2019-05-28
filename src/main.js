// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueNativeSock from 'vue-native-websocket'

Vue.config.productionTip = false
Vue.use(VueNativeSock, 'ws://pm.tada.team/ws', { format: 'json' })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
