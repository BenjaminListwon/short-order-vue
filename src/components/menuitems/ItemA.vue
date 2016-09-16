<template>
  <li class="mud">
    Bucket of Cold Mud
    <a class="button is-success" @click="sendOrder">Order Up!</a>
  </li>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ItemA',
  props: ['order'],
  methods: {
    sendOrder () {
      this.orderUp(this.order.id)
    },
    ...mapActions(['orderUp'])
  }
}
</script>

<style>
.mud {

}
</style>