export default {
  namespaced: true,
  state: {
    data: [],
  },
  mutations: {
    ADD_NOTIFICATION(state, payload) {
      state.data.push({...payload});
    },
    UPDATE_NOTIFICATION(state, payload) {
      const updatedData = state.data.map(item => {
        return item.id === payload ? {...item, isCompleted: true} : item
      });
      state.data = [...updatedData];
    }
  },
  actions: {
    addNotification(context, payload) {
      context.commit('ADD_NOTIFICATION', payload);
    },
    updateNotification(context, payload) {
      context.commit('UPDATE_NOTIFICATION', payload);
    }
  }
}