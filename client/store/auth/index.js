import mutations from './mutations.js';
import getters from './getters.js';
import actions from './actions.js';

let initialState = null;
try {
  initialState = JSON.parse(localStorage.getItem('auth'));
} catch (e) {
  initialState = {
    user: null,
    token: null
  };
}
export default {
  state: initialState,
  actions,
  getters,
  mutations
};
