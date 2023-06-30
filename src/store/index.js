import { createStore } from 'vuex'
import loading from './loading';
import user from './user';
import notifications from './notifications';

const store = createStore({
  modules: {
    loading, user, notifications
  }  
});

export default store;