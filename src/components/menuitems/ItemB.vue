<template>
  <li class="cow">
    Cow Feed
    <a class="button is-success" @click="sendOrder">Order Up!</a>
  </li>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ItemB',
  props: ['order'],
  methods: {
    sendOrder () {
      if (window.confirm('Did you remember the Love Apples?')) {
        this.orderUp(this.order.id)
      } else {
        return false
      }
    },
    ...mapActions(['orderUp'])
  }
}
</script>
