
const works = {
  namespaced: true,
  state: {
    data: []
  },
  getters: {
    works: ({ data }) => (data)
  },
  mutations: {
    addNewWork(state, work) {
      state.data.push(work)
    },
    removeSavedWork(state, workId) {
      state.data = state.data.filter(work => { return work._id !== workId })
    }
  },
  actions: {
    fetchWorks({ state, rootGetters }) {
      const { $http } = rootGetters
      $http.get('/works').then(response => {
        state.data = response.body
      },
      response => {
        console.error(response)
      })
      // this.axios.get('/works').then((response) => {
      //   console.log(response.data)
      // })
    },
    postWorks({ state, rootGetters }) {
      const { $http } = rootGetters
      $http.post('/works', JSON.stringify(state.data))
        .then(() => {
          this.fetchWorks()
        })
    }
  }
}

export default works
