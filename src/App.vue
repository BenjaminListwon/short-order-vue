<template>
  <div id="app" class="columns">     
    <div class="column is-4 is-offset-1">
      <sov-menu></sov-menu>
      <sov-orders></sov-orders>
    </div>
    <div class="column is-5 is-offset-1">
      <sov-console></sov-console>
    </div>
  </div>
</template>

<script>
import SovMenu from './components/SovMenu.vue'
import SovOrders from './components/SovOrders.vue'
import SovConsole from './components/SovConsole.vue'

export default {
  components: {
    SovMenu,
    SovOrders,
    SovConsole
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
.column {
  padding: 2rem;
}
.box header {
  padding-bottom: 1rem;  
  text-align: center;
  border-bottom: 3px double #ddd;
}
ul li {
  padding: 1.1rem 0;
  position: relative;
}
li a.button {
  position: absolute;
  right: 0;
}
div.box a.button {
  position: absolute;
  right: 0em;
  top: 0.75rem;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
