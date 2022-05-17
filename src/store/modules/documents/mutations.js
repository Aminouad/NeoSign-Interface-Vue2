export default {
    addDocument(state,payload) {
        state.documents.push(payload);
    },
    setDocuments(state, payload) {
        state.documents = payload;
      },
};