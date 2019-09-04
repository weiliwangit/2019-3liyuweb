import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false//不用管这句话，写上就行

new Vue({
  render: h => h(App),
}).$mount('#app')
