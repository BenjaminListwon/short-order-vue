<template>
  <div class="sov-menu box">
    <header>
      <h1 class="title is-3">Menu</h1>
    </header>
    <ul>
        <li v-for="item in menuItems">
          {{item.title}}
          <a class="button is-danger" @click="newOrder" :data-type="item.type">+1</a>
        </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'SovMenu',
  methods: {
    ...mapActions(['newOrder'])
  },
  computed: {
    ...mapState({
      menuItems: ({ menu }) => menu.items
    })
  }
}
</script>

