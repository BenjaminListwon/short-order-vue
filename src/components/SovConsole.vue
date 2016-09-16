<template>
  <div class="sov-console box">
    <pre>orderItems = {{orderItems}}

menuItems = {{menuItems}}
    </pre>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'SovConsole',
  computed: {
    ...mapState({
      menuItems: ({ menu }) => menu.items,
      orderItems: ({ orders }) => orders.items
    })
  }
}
</script>

<style>
.sov-console {
  background: #444;
  box-shadow: inset 0px 5px 5px #333;
}
.sov-console pre {
  background: #444;
  color: #6c6;
  max-height: 780px;
  overflow: auto;
}
</style>