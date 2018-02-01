
import skillProgressInit from '../../modules/skillProgressInit'

const skills = {
  namespaced: true,
  state: {
    data: []
  },
  getters: {
    skills: ({ data }) => (data)
  },
  actions: {
    fetchSkills({ state, rootGetters }) {
      const { $http } = rootGetters
      $http.get('/get/about').then(response => {
        state.data = response.body
      }, response => {
        console.error(response)
      }).then(() => {
        skillProgressInit('skill', 'skill__bar', 'data-pct')
      })
    }
  }
}

export default skills
