export default {
  namespaced: true,
  state: {
    isLoggedin: false,
    user: {}
  },
  mutations: {
    SET_LOG_IN(state, payload) {
      state.isLoggedin = true;
      state.user = {...payload};
    },
    SET_LOG_OUT(state) {
      state.isLoggedin = false;
    }
  },
  actions: {
    setLogin(context, payload) {
      context.commit('SET_LOG_IN', payload);
    },
    setLogout(context) {
      context.commit('SET_LOG_OUT');
    }
  }
}