/**
 * Created by lokiiart on 12/10/16.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  openId: 'test'
}

const mutations = {
  getOpenId (state, n) {
    state.openId = n
  }
}

const actions = {
}

const getters = {

}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
