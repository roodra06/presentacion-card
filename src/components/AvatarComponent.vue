<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <div class="mb-3">
    <!-- <img class="img-avatar" alt="Vue logo" src="avatarImg" />
    <img class="img-avatar" alt="Vue logo" :src="'avatarImg'" /> -->
    <img class="img-avatar" alt="Vue logo" :src="avatarImg" />
    <div class="select-container">
      <select
        v-model="imgAvatarOption"
        class="select-images-avatar"
        @change="onChangeSelectImageAvatar()"
        >
        <option class="option" disabled default>Seleccione una opción</option>
        <option v-for="(image, i) in avatarImages" :key="i" :value="image">
          {{image.title}}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AvatarComponent',
  data() {
    return {
      imgAvatarOption: null,
    };
  },
  computed: {
    avatarImg() {
      return this.$store.state.userAvatar;
    },
    avatarImages() {
      return this.$store.state.imagenesDisponibles;
    },
  },
  methods: {
    onChangeSelectImageAvatar() {
      this.$store.commit('updateUserAvatarMutation', this.imgAvatarOption.url);
    },
  },
};
</script>

<style scoped>
.img-avatar {
  height: 200px;
  margin-bottom: 10px;
  border-radius: 100px;
}
.option{
  background-color:#2E424D;
  color: #EAEBED;
  margin-bottom: 30px;
  border-radius: 15px;
  height: 50px;
  border-color: #2E424D;
  margin: 10px;
  width: 200px;
  padding-top: 5px;
}
</style>
