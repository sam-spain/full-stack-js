import { SET_AUTH } from './actions.js';
export default {
  [SET_AUTH](state, { user, token }) {
    state.user = user;
    state.token = token;
  }
};
