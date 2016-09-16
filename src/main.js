import Vue from 'vue'
import App from './App.vue'


// Import the app's store
import store from './vuex/store'

new Vue({ // eslint-disable-line no-new
  el: '#app',
  render: (h) => h(App),

  store: store,
  data() { return {} },
  computed: {},

  components: {
    App
  },

  methods: {
    newBlock: function() {
      this.blocks.push({
        title: this.title,
        type: this.type
      })
      this.title = "";
    },
    handleReorder: function(oldIndex, newIndex) {
      var block = this.$get('blocks[' + oldIndex + ']');
      this.blocks.$remove(this.blocks[oldIndex]);
      this.blocks.splice(newIndex, 0, block);

      // TODO: Dipsatch this another way
      updatePreview();
    }
    //...mapActions(['modalToggleShowing'])
  }
})
