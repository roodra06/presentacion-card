<template>
  <div class="home">
    <AvatarComponent />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import AvatarComponent from '@/components/AvatarComponent.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    AvatarComponent,
  },
};
</script>
