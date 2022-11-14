<template>
  <div>
    <button class="buton" @click="addAge">
      Aumentar edad +
    </button>
    <button class="buton" @click="removeAge">
      Disminuir edad -
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
<style>
.buton{
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
