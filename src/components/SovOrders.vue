<!--  
SovOrders.vue

This component displays the current orders on "The Line". It uses three
subcomponents to render the list items which is a bit contrived, but I 
wanted to show how you can include different components based on some
type value.


-->
<template>
  <div class="sov-orders box">
    <header>
      <h1 class="title is-3">The Line</h1>
      <h2 :class="[{ 'backedup':isBackedUp }, 'subtitle', 'is-6']"><strong>{{count}}</strong> Orders Waiting</h2>
    </header>

    <transition-group tag="ul" name="fade" mode="out-in">
      <component v-for="order in orderItems" :is="order.type" :key="order.id" :order="order"></component>
    </transition>
  </div>
</template>

<script>
import ItemA from './menuitems/ItemA.vue'
import ItemB from './menuitems/ItemB.vue'
import ItemC from './menuitems/ItemC.vue'

import { mapActions, mapState } from 'vuex'

export default {
  name: 'SovOrders',
  components: {
    ItemA,
    ItemB,
    ItemC
  },
  methods: {
    ...mapActions(['handleOrder'])
  },
  computed: {
    ...mapState({
      orderItems: ({ orders }) => orders.items
    }),
    count () { return this.orderItems.length },
    isBackedUp () { return this.count > 10 }
  }
}
</script>

<style>
.sov-orders ul {
  max-height: 450px;
  overflow: auto;
}
.backedup, .backedup strong  {
  color: tomato;
}
</style>