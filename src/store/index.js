import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    api: {
      url: "http://localhost/64in-api/public/api/",
      version: "v1/"
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
