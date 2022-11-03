import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    nombre: 'Marcos Martinez Jorge Rodrigo',
    edad: 18,
  },
  mutations: {
    addAgeMutation(state, age) {
      state.edad += age;
    },
    removeAgeMutation(state, age) {
      state.edad -= age;
    },
  },
});
