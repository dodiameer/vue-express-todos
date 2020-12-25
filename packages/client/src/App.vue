<template>
  <div id="app">
    <h1>Monorepo client</h1>
  </div>
</template>

<script>
const common = require("@vue-express-todos/common")
export default {
  name: 'App',
  created() {
    common()
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
  margin-top: 60px;
}
</style>
