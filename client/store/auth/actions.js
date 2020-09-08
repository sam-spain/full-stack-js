import client from '@client/utils/axios.js';
export const SET_AUTH = 'SET_AUTH';
export const POST_REGISTER = 'POST_REGISTER';
export const POST_LOGIN = 'POST_LOGIN';
export const UNSET_AUTH = 'UNSET_AUTH';

export default {
  [POST_REGISTER]: (context, data) => client.post('auth/register', data),
  [POST_LOGIN]: (context, data) => client.post('auth/login', data)
};
