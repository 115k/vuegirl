import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/iconfont/iconfont.css'
import ElementUI from 'element-ui'
import Vant from 'vant'
import 'vant/lib/index.css'
import bgview  from './components/bgview.vue'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(Vant)

Vue.component('bgView', bgview)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


router.beforeEach((to, from, next) => {
  const userInfo = window.localStorage.getItem('user') ? JSON.parse(window.localStorage.getItem('user')) : {}
  if (to.meta.isNeedLogin && userInfo.id) {
    router.push('/login')
    next(false)
  }
  next()
})