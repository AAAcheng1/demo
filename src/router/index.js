import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Axios from 'axios'
Vue.prototype.$http = Axios

Axios.defaults.baseURL = '/api'

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../App'),
      children:[
        {
          //首页
          path:'',
          components: {
            header: () => import ('../page/header.vue'),
            default:() => import ('../components/home.vue'),
            floor:() => import ('../page/floor.vue')
          },
        },
        {
          //首页
          path:'discover',
          components: {
            header: () => import ('../page/header.vue'),
            default:() => import ('../components/home.vue'),
            floor:() => import ('../page/floor.vue')
          },
        },
        {
          //排行榜
          path:'discover/toplist',
          components: {
            header: () => import ('../page/header.vue'),
            default:() => import ('../page/toplist.vue'),
            floor:() => import ('../page/floor.vue')
          },
        },
        {
          //排行榜详情页
          path:'toplist',
          components: {
            header: () => import ('../page/header.vue'),
            default:() => import ('../page/topxy.vue'),
            floor:() => import ('../page/floor.vue')
          },
        },
        {
          //歌单
          path:'discover/playlist',
          components: {
            header: () => import ('../page/header.vue'),
            default: () => import ('../page/playlist.vue'),
            floor:() => import ('../page/floor.vue')
          }
        },
        {
          //歌单详情页
          path:'detail',
          components: {
            header: () => import ('../page/header.vue'),
            default: () => import ('../page/detail.vue'),
            floor:() => import ('../page/floor.vue')
          }
        },
        {
          //主播电台
          path:'discover/djradio',
          components: {
            header: () => import ('../page/header.vue'),
            default: () => import ('../page/djradio.vue'),
            floor:() => import ('../page/floor.vue')
          }
        },
        {
          //主播电台详情页
          path:'djradio/categroy/:id',
          components: {
            header: () => import ('../page/header.vue'),
            default: () => import ('../page/djradio1.vue'),
            floor:() => import ('../page/floor.vue')
          }
        },
        {
          //歌手
          path:'discover/artist',
          components: {
            header: () => import ('../page/header.vue'),
            default: () => import ('../components/artist.vue'),
            floor:() => import ('../page/floor.vue')
          }
        },
        {
          //我的音乐
          path:'my',
          components: {
            header: () => import ('../page/header.vue'),
            default: () => import ('../page/my.vue'),
            floor:() => import ('../page/floor.vue')
          }
        },
        {
          //朋友
          path:'friend',
          components: {
            header: () => import ('../page/header.vue'),
            default: () => import ('../page/friend.vue'),
            floor:() => import ('../page/floor.vue')
          }
        },
        {
          //商城
          path:'product',
          components: {
            default: () => import ('../page/product.vue'),
            floor:() => import ('../page/floor.vue')
          }
        },
        {
          //下载客户端
          path:'download',
          components: {
            header: () => import ('../page/header.vue'),
            default: () => import ('../page/download.vue'),
            floor:() => import ('../page/floor.vue')
          }
        }

      ]
    },
    // {
    //   //歌单
    //   path: '/playlist',
    //   name:"playlist",
    //   components: {
    //     header:() => import ('../page/header.vue'),
    //     default: () => import ('../page/playlist.vue'),
    //     floor:() => import ('../page/floor.vue')
    //   }
    // },
    // {
    //   //歌手
    //   path: '/discover/artist',
    //   name:"artist",
    //   components: {
    //     header:() => import ('../page/header.vue'),
    //     default: () => import ('../components/artist.vue'),
    //     floor:() => import ('../page/floor.vue')
    //   }
    // },
    {
      //歌手详情
      path: '/artists',
      name:"artists",
      components: {
        header:() => import ('../page/header.vue'),
        default: () => import ('../page/artists.vue'),
        floor:() => import ('../page/floor.vue')
      }
    },
    {
      //评论
      path: '/todis',
      name:"todis",
      components: {
        header:() => import ('../page/header.vue'),
        default: () => import ('../page/todis.vue'),
        floor:() => import ('../page/floor.vue')
      }
    }
  ]
})
