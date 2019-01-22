/*
* @Author: Sexy Phoenix
* @Date:   2019-01-21 18:34:26
* @Last Modified by:   Sexy Phoenix
* @Last Modified time: 2019-01-22 10:48:49
*/
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './action'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions,
  mutations
})
