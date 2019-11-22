import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
          header:() => import ('../page/header.vue'),
          default:() => import ('../components/home.vue'),
          floor:() => import ('../page/floor.vue')
      }
    },
    {
      path: '/ww',
      components: {
          default:() => import ('../page/banner.vue'),
          floor:() => import ('../page/hotdoor.vue')
      }
    }
  ]
})
