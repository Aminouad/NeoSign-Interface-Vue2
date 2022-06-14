export default {
    addPersonnel(state,payload) {
        state.Personals.push(payload);
    },
    setPersonnel(state, payload) {
        state.personnels = payload;
      },
};