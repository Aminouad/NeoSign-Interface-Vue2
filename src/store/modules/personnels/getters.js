export default {
    personnels(state) {
        return state.personnels;
    },
    hasPersonnels(state){  //it's for the case when no personnels available
          return state.personnels && state.personnels.length > 0;
    }  
};