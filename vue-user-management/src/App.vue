<template>
  <div id="app">
    <users></users>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Users from './components/Users'

export default {
  name: 'app',
  components: {
    Hello,Users
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
