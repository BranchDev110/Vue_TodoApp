export default {
  namespaced: true,
  state: {
    value: false,
  },
  mutations: {
    CHANGE_LOADING_STATE(state) {
      state.value = !state.value;
    }
  },
  actions: {
    changeLoadingState(context) {
      context.commit('CHANGE_LOADING_STATE');
    }
  }
}