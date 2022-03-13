import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  // 1. Create State
  state: {
    user: {
      name: 'John',
    },
  },
  mutations: {
    // 2. Create Mutations to manipulate State
    setUser(state, user) {
      state.user = user;
    },
  },
  // 4. Use Getters to call and mutate date
  getters: {
    getUser(state) {
      return state.user;
    },
    // get Name from state
    getName: (state) => state.user.name,
  },
  actions: {
    // 3. Create Actions to trigger mutation
    callSetUser({ commit }, payload) {
      commit('setUser', payload);
    },
  },
  modules: {
  },
});
