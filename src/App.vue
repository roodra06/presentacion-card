<template>
  <div id="app">
    <nav>
      <strong><router-link to="/">Who I am?</router-link></strong> |
      <strong><router-link to="/my-likes">My Likes</router-link></strong> |
      <strong><router-link to="/be-with-my-girl">Be with my Girl</router-link></strong>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: linear-gradient(to bottom, #5B8291 , #98DAD9 , #EAEBED);
  min-height: 100vh;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: rgba(9, 0, 236, 0.59);
    }
  }
}
</style>
