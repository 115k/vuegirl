import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
const Login = () => import(/* webpackChunkName: "login" */ '../views/login/index.vue')
const My = () => import(/* webpackChunkName: "my" */ '../views/personal/index.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    alias: '/',
    component: Home,
    meta: {
      isNeedLogin: false,
      title: '首页',
      hideBack: true,
      hideHeader: false,
      hidefoot: false
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      isNeedLogin: false,
      title: '登录',
      hideHeader: false,
      hidefoot: true
    }
  },
  {
    path: '/my',
    name: 'my',
    component: My,
    meta: {
      isNeedLogin: true,
      title: '个人中心',
      hideBack: true,
      hideHeader: false,
      hidefoot: false
    }
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
