<template>
  <div class="about">
    <BeWithMyGirlComponent />
  </div>
</template>
<script>
// @ is an alias to /src
import BeWithMyGirlComponent from '@/components/BeWithMyGirlComponent.vue';

export default {
  name: 'BeWithMyGirlView',
  components: {
    BeWithMyGirlComponent,
  },
};
</script>
