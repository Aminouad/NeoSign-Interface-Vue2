export default {
    setUser(state, payload) {
        state.token = payload.token;
        state.userId=payload.userId;
        state.role=payload.role;
    },
    logout(state) {
        state.token = null;
        state.userId=null;
        state.role=null;
      
        localStorage.clear();

    }
};