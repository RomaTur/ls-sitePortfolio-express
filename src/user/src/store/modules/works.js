const works = {
  namespaced: true,
  state: {
    data: []
  },
  getters: {
    works: ({ data }) => (data)
  },
  actions: {
    fetchWorks({ state, rootGetters }) {
      const { $http } = rootGetters
      $http.get('/works').then(response => {
        state.data = response.body
      }, response => {
        console.error(response)
      })
    }
  }
}

export default works
