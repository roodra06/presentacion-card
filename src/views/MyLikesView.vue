<template>
  <div class="about">
    <my-likes />
  </div>
</template>
<script>
// @ is an alias to /src
import MyLikes from '@/components/MyLikes.vue';

export default {
  name: 'MyLikes',
  components: {
    'my-likes': MyLikes,
  },
};
</script>
