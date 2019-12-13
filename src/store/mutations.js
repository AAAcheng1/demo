export default {
     getitem(state,id){
        let state1 = 10*(id-1)
        let end1 =  10*id;
        state.newtodis = state.todisww.slice(state1,end1)
     },
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
}




 