import Vue from 'vue';
import Main from './pages/main.vue';
import './styles/main.css';
import router from './routes';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const app = new Vue({
  el: '#app',
  router,
  render: (h) => h(Main)
});
