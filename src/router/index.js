import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Axios from 'axios'
Vue.prototype.$http = Axios



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
      path: '/discover/artist',
      name:"artist",
      components: {
        header:() => import ('../page/header.vue'),
        default: () => import ('../components/artist.vue'),
        floor:() => import ('../page/floor.vue')
      }
    },
    {
      path: '/todis',
      name:"artist",
      components: {
        header:() => import ('../page/header.vue'),
        default: () => import ('../page/todis.vue'),
        floor:() => import ('../page/floor.vue')
      }
    }
  ]
})
