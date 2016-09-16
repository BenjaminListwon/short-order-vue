<template>
  <li class="winter">
    English Winter
    <a class="button is-success" @click="sendOrder">Order Up!</a>
  </li>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ItemC',
  props: ['order'],
  methods: {
    sendOrder (event) {
      event.target.className = event.target.className + ' spin'
      this.orderUp(this.order.id)
    },
    ...mapActions(['orderUp'])
  }
}
</script>

<style>
.winter .button {
  transition: transform .5s
}
.winter .button.spin {
  transform: rotate(180deg);
}
</style>