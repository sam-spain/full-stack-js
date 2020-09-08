import { SET_AUTH, UNSET_AUTH } from './actions.js';
export default {
  [SET_AUTH](state, { user, token }) {
    state.user = user;
    state.token = token;
  },
  [UNSET_AUTH](state) {
    state.user = null;
    state.token = null;
  }
};
