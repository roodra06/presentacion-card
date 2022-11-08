import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    nombre: 'Marcos Martinez Jorge Rodrigo',
    edad: 18,
    userAvatar: 'https://st2.depositphotos.com/2498595/6610/v/600/depositphotos_66106945-stock-illustration-business-avatar-ico.jpg',
    imagenesDisponibles: [
      'https://st2.depositphotos.com/2498595/6610/v/600/depositphotos_66106945-stock-illustration-business-avatar-ico.jpg',
      'https://www.crushpixel.com/big-static19/preview4/man-avatar-icon-flat-style-3746672.jpg',
      'https://previews.123rf.com/images/yupiramos/yupiramos1707/yupiramos170715915/82083101-avatar-hombre-icono-sobre-fondo-blanco-ilustraci%C3%B3n-vectorial-de-dise%C3%B1o-colorido.jpg',
      'https://img.favpng.com/15/19/18/computer-icons-ninja-favicon-iconfinder-avatar-png-favpng-Jku9r1TGGY4Ha6BLUXz1eL3DQ.jpg',
    ],
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
