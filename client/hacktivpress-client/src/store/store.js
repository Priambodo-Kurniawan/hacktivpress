import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    viewArticles: true,
    showForm: false,
    data: null
  },
  mutations: {
    getData(state){
      axios.get('http://localhost:5000/api/articles')
      .then(articles => {
        state.data = articles.data
      })
      .catch( err => console.log(err))
    },
    pushData(state, data){
      state.data.push(data)
      state.viewArticles = true
      state.showForm = false
      console.log(data);
    }
  },
  actions: {
  },
  getters: {
    viewArticles(state) {
      return state.viewArticles
    },
    showForm(state) {
      return state.showForm
    },
    data(state) {
      // console.log(state.data);
      return state.data
    }
  }
})
