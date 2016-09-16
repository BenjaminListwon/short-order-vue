import Vue from 'vue'
import App from './App.vue'

// Import the app's store
import store from './vuex/store'

new Vue({ // eslint-disable-line no-new
  el: '#app',
  render: (h) => h(App),

  store: store,
  data () { return {} },
  computed: {},

  components: {
    App
  },

  methods: {}
})
