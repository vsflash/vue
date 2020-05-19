<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
    </div>
    <router-view name="navigation"></router-view>
    <router-view/>

    <div>
      <button @click="showPage(-1)">Prev</button>
      <button @click="showPage(1)">Next</button>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      showPage(index) {
        let oldLocation = window.location.href;
        this.$router.go(index);
      }
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
