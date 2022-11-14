import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    nombre: 'Ramses Martinez',
    edad: 18,
    userAvatar:
      'https://st2.depositphotos.com/2498595/6610/v/600/depositphotos_66106945-stock-illustration-business-avatar-ico.jpg',
    imagenesDisponibles: [
      {
        id: 12,
        title: 'avatar 1',
        url: 'https://e7.pngegg.com/pngimages/1012/711/png-clipart-pokxe9mon-go-video-game-ico-icon-lovely-elf-avatar-love-game-thumbnail.png',
      },
      {
        id: 20,
        title: 'avatar 2',
        url: 'https://st2.depositphotos.com/2498595/6610/v/600/depositphotos_66106945-stock-illustration-business-avatar-ico.jpg',
      },
      {
        id: 31,
        title: 'avatar 3',
        url: 'https://previews.123rf.com/images/yupiramos/yupiramos1707/yupiramos170715915/82083101-avatar-hombre-icono-sobre-fondo-blanco-ilustraci%C3%B3n-vectorial-de-dise%C3%B1o-colorido.jpg',
      },
      {
        id: 45,
        title: 'avatar 4',
        url: 'https://img.favpng.com/15/19/18/computer-icons-ninja-favicon-iconfinder-avatar-png-favpng-Jku9r1TGGY4Ha6BLUXz1eL3DQ.jpg',
      },
    ],
  },
  mutations: {
    addAgeMutation(state, age) {
      state.edad += age;
    },
    removeAgeMutation(state, age) {
      state.edad -= age;
    },
    updateUserAvatarMutation(state, userAvatar) {
      state.userAvatar = userAvatar;
    },
  },
});
