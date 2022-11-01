<template>
  <div>
    <h1>{{ nombre }}</h1>
    <div class="card targeta" style="width: 18rem">
      <img class="card-img-top" src="../assets/couple.png" alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title">Be with my Girl</h5>
        <p class="card-text">I love to be with my girlfriend but we don't have enought time</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Likes',
  computed: {
    nombre() {
      return this.$store.state.nombre;
    },
  },
};
</script>

<style scoped>
.targeta {
  display: inline-block;
  background: #2c3e50;
  color: white;
  height: 30em;
  margin-bottom: 200px;
}
</style>
