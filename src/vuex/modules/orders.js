// Initial state
const state = {
  items: []
}

// Mutations
const mutations = {
  NEW_ORDER (state, type) {
    var id = 'order-' + parseInt(Math.random() * 100000)
    state.items.push({ 'type': type, 'id': id })
  },
  CLEAR_ORDER (state, id) {
    for (var i = state.items.length - 1; i >= 0; i--) {
      if (state.items[i].id === id) {
        state.items.splice(i, 1)
      }
    }
  }
}

export default {
  state,
  mutations
}
