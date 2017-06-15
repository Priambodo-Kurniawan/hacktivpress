import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    viewArticles: true,
    showForm: false,
    user_id: localStorage.getItem('user_id') || null,
    username: localStorage.getItem('username') || null,
    email: localStorage.getItem('email') || null
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
    user_id(state) {
      return state.user_id
    },
    username(state) {
      return state.username
    },
    email(state) {
      return state.email
    }
  }
})
