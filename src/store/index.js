import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      isEnter: true,
      name: '',
    };
  },
  getters: {},
  mutations: {
    login(state) {
      state.isEnter = false;
    },
    notlogin(state) {
      state.isEnter = true;
    },
    showName(state, login){
        state.name = login
    }
  },
});

export default store