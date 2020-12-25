<template>
  <div id="app-container">
    <header id="app-header">
      <h1>Todo app</h1>
    </header>
    <greeting />
  </div>  
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import Greeting from "./components/Greeting.vue"

@Component({
  components: {
    Greeting
  }
})
export default class App extends Vue {}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&display=swap');
*, *::before, *::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
:root {
  font-size: 18px;
  --accent: #f1faee;
  --primary: #457b9d;
  --primary-dark: #1d3557;
  --primary-light: #a8dadc;
  --primary-text: white;
  --secondary: #e63946;
  --secondary-dark: #8a131d;
  --secondary-light: #ff6e7a;
  --secondary-text: white;
}
body {
  font-family: "Open Sans", sans-serif;
  overflow-x: hidden;
}
#app-header {
  height: 5rem;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primary);
  color: var(--accent)
}
</style>