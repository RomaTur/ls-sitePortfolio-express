const posts = {
  namespaced: true,
  state: {
    data: []
  },
  getters: {
    articles: ({ data }) => (data)
  },
  mutations: {
    addNewArticle(state, article) {
      state.data.push(article)
    },
    removeSavedArticle(state, articleId) {
      state.data = state.data.filter(article => { return article._id !== articleId })
    }
  },
  actions: {
    fetchArticles({ state, rootGetters }) {
      const { $http } = rootGetters
      $http.get('/get/blog').then(response => {
        state.data = response.body
      }, response => {
        console.error(response)
      })
    },
    postArticles({ state, rootGetters }) {
      const { $http } = rootGetters
      $http.post('/post/blog', JSON.stringify(state.data))
        .then(() => {
          this.fetchArticles()
        })
    }
  }
}

export default posts
