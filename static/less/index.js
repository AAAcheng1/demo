import Vue from 'vue'
import Vuex from 'vuex'
// import mutations from './mustions'
// import actions from './action'
import dj from "../../static/json/dj"
import dj1 from "../../static/json/Anchor1"
// import ajax from '../config/ajax'

Vue.use(Vuex)
// const state = {
// 	"djjson":djjson

// }

export default new Vuex.Store({
    state:{
        dj1:dj1,
        dj:dj,
        djphArr1:[]
    },
    mutations: {
        changePage(state, val) {
           state.djphArr1.length=0;
            for (var i = val * 7; i < (val + 1) * 7; i++) {
                console.log(i)
                state.djphArr1.push(state.dj.djrank[i]);
                console.log(state.djphArr1)
            }
           
        },
        app() {

        }
    },
    actions: {
        adds({ commit }, val) {
            commit("app")
            commit("changePage")

        }
    }
    // actions,
    // mutations
})