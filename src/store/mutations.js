export default {
     getitem(state,id){
        let state1 = 10*(id-1)
        let end1 =  10*id;
        state.newtodis = state.todisww.slice(state1,end1)
     }
}