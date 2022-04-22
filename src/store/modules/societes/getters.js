export default {
    societes(state) {
        return state.societes;
    },
    hasSocietes(state){  //it's for the case when no societe available
          return state.societes && state.societes.length > 0;
    }  
};