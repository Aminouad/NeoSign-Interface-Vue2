export default {
    documents(state) {
        return state.documents;
    },
    hasDocuments(state){  //it's for the case when no documents available
          return state.documents && state.documents.length > 0;
    }  
};