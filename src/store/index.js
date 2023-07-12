import { createStore } from "vuex";

export default createStore({
  state: {
    key: "",
  },
  getters: {},
  mutations: {
    getKey(state) {
      state.key = window.localStorage.getItem("dly-key");
    },
  },
  actions: {},
  modules: {},
});
