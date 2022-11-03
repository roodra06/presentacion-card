<template>
  <div>
    <button @click="addAge">
      Aumentar 10 años a mi edad +
    </button>
    <button @click="removeAge">
      Quitar 10 años a mi edad -
    </button>
  </div>
</template>

<script scoped>
import { mapMutations } from 'vuex';

export default {
  name: 'MyChangeAgeButton',
  methods: {
    ...mapMutations({
      addAgeMut: 'addAgeMutation',
    }),
    addAge() {
      this.addAgeMut(1);
    },
    removeAge() {
      this.$store.commit('removeAgeMutation', 1);
    },
  },
};
</script>
