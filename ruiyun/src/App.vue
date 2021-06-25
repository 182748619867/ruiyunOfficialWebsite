<template>
  <div id="app">
    
    <router-view/>

  </div>
</template>

<script>
export default {
  name: 'App',

}
</script>

<style>
#app {
    font-size: 15px;
    color: #777777;
    line-height: 1.8em;
    font-weight: 400;
    background: #ffffff;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center top;
    -webkit-font-smoothing: antialiased;
    font-family: 'Roboto', sans-serif;
}
</style>
