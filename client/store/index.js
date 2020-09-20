import Vuex from 'vuex';
import Vue from 'vue';
import auth from './auth/index.js';
import flash from './flash';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    flash
  }
});
