<template>
  <div class="home">
    <img class="img-avatar" alt="Vue logo" src="../assets/user.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
  },
};
</script>

<style>
.img-avatar {
  width: 200px;
}
</style>
