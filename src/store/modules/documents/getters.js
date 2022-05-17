export default {
    documents(state) {
        return state.documents;
    },
    hasDocuments(state){  //it's for the case when no documents available
          return state.documents && state.documents.length > 0;
    }  ,
    shouldUpdate(state) {
        const lastFetch = state.lastFetch;
        if (!lastFetch) {
          return true;
        }
        const currentTimeStamp = new Date().getTime();
        return (currentTimeStamp - lastFetch) / 1000 > 60;
      }
};