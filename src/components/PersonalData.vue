<template>
  <div class="personal-data-container">
    <h1>{{ nombre }}</h1>
    <small>Personal Data component</small>
    <p class="years-container">
      I am: <span class="years">{{ edadFromStore }}</span> years old
    </p>
  </div>
</template>

<script>
export default {
  name: 'PersonalData',
  computed: {
    nombre() {
      return this.$store.state.nombre;
    },
    edadFromStore() {
      return this.$store.state.edad;
    },
  },
};
</script>

<style scoped>
.years {
  font-size: 50px;
  font-weight: 600;
  color: #fefefe;
}
.personal-data-container {
  border: blue 1px solid;
}
</style>
