<template>
  <div class="sov-orders">
    <header>
      <h1>Orders</h1>
    </header>

      <transition-group name="fade" mode="out-in">
        <component v-for="order in orderItems" :is="order.type" :key="order.id" :order="order"></component>
      </transition>
  </div>
</template>

<script>
import ItemA from './ItemA.vue';
import ItemB from './ItemB.vue';
import ItemC from './ItemC.vue';

import { mapGetters, mapActions, mapState } from 'vuex'

export default {
  name: 'SovOrders',
  data() { return {
    blocks: []
  } },
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
    })
  },
  mounted() {
    
  }
};

</script>