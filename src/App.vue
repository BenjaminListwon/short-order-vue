<template>
  <div id="app" class="columns">     
    <div class="column is-4">
      <sov-menu></sov-menu>
    </div>
    <div class="column is-6 is-offset-2">
      <sov-orders></sov-orders>
    </div>
  </div>
</template>

<script>
import SovMenu from './components/SovMenu.vue';
import SovOrders from './components/SovOrders.vue';

// Here's the super awesome helpers
import { mapGetters, mapActions, mapState } from 'vuex'

export default {
  components: {
    SovMenu,
    SovOrders
  },
  computed: {}
}



</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
.column {
  padding: 2rem;
}
h1 { font-size: 2rem; padding-bottom: 1rem;}
li {
  padding: 1.2rem 0;
  position: relative;
}
div.box {
  position: relative;
}
li a.button {
  position: absolute;
  right: 0;
}
div.box a.button {
  position: absolute;
  right: 1em;
  top: 2em;
}
</style>
