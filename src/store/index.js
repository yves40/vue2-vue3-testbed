import Vue from "vue"
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    Version: 'store/index:1.14, Sep 20 2020 ',
    num1: 0,
    num2: 0,
    result: 0,
    modifications: 0,
  },
  getters: {
    getVersion(state) { return state.Version;},
    getNum1(state) { return state.num1;},
    getNum2(state) { return state.num2;},
    getResult(state) { return state.result;},
    getModificationsNumber(state) { return state.modifications;}
  },
  mutations: {
    setNum1(state, num) { 
      state.num1 = parseInt(num);
    },
    setNum2(state, num) { 
      state.num2 = parseInt(num);
    },
    setResult(state, payload) {
      state.num1 = parseInt(payload.num1);
      state.num2 = parseInt(payload.num2);
      state.result =  state.num1 + state.num2;
      ++state.modifications;
    },
  },
  actions: {
    updateResult({commit}, payload) { 
      commit('setResult', payload);
    }, 
    updateNum1({commit, state}, payload) {
      commit('setNum1', payload.num1);
    },
    updateNum2({commit, state}, payload) {
      commit('setNum2', payload.num2);
    }
  },
  modules: {
  }
});

export default store;
