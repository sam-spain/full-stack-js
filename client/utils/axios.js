import Axios from 'axios';

const axios = Axios.create({
  baseURL: '/api/v1/'
});

axios.interceptors.request.use(function (config) {
  try {
    const token = JSON.parse(window.localStorage.getItem('auth')).token;
    if (token) {
      config.headers = {
        access_token: token
      };
    }
    return config;
  } catch {
    return config;
  }
});

export default axios;
