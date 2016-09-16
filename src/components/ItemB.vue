<template>
  <div class="box">
    <header>
      <h1>Cow Feed</h1>
    </header>
    <a class="button is-success" @click="sendOrder">Order Up!</a>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ItemB',
  data() { return {} },
  props: ['order'],
  methods: {
    sendOrder() {
      this.orderUp(this.order.id);
    },
    ...mapActions(['orderUp'])
  }
};

</script>
