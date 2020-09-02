<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default { 
  name: 'App',   
}

</script>

<style>
body, html {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100%;
}

#app { 
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin:0
}
</style>
