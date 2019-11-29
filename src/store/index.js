import Vue from 'vue'
import Vuex from 'vuex'
// import mutations from './mutations'
// import actions from './action'
// import ajax from '../config/ajax'
import mutations from './mutations'
import actions from './actions'
Vue.use(Vuex)
    //state 状态   
    //mustations 触发状态（四部） 

    //actions 异步分发   
    //getters 计算
    //computed  计算属性
    //module 
import state from '../../static/json/todis'

export default new Vuex.Store({
	state,
	actions,
	mutations
})