<template>
  <div>
    <!-- <img class="img-avatar" alt="Vue logo" src="avatarImg" />
    <img class="img-avatar" alt="Vue logo" :src="'avatarImg'" /> -->
    <img class="img-avatar" alt="Vue logo" :src="avatarImg" />
  </div>
</template>

<script>
export default {
  name: 'AvatarComponent',
  computed: {
    avatarImg() {
      return this.$store.state.userAvatar;
    },
  },
};
</script>

<style scoped>
.img-avatar {
  width: 200px;
  margin-bottom: 10px;
  border-radius: 50%;
}
</style>
