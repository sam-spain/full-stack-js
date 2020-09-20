import Axios from 'axios';

const axios = Axios.create({
  baseURL: '/api/v1/'
});

axios.interceptors.request.use(function (config) {
  const token = JSON.parse(window.localStorage.getItem('auth')).token;
  config.headers = {
    access_token: token
  };
  return config;
});

export default axios;
