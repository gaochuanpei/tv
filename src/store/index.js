import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    tv: [],
    pb: false
  },
  mutations: {
    changeTv(state, content) {
      state.tv = content;
    },
    changePb(state) {
      state.pb = true;
    }
  }
});
export default store;
