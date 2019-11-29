export default {
    addItem({state,commit},id){
        if(state.itemNum<state.itemDetail.length){
            Promise.all([commit("nextItem"),commit("goItem",id)])
        }else{
            commit("goItem",id)
        }
    }
}