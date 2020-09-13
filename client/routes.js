import VueRouter from 'vue-router';
import Login from '@web-page/Login.vue';
import Register from '@web-page/Register.vue';
import Home from '@web-page/Home.vue';
import ForgotPassword from '@web-page/ForgotPassword.vue';

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/auth/login',
      component: Login
    },
    {
      path: '/auth/register',
      component: Register
    },
    {
      path: '/',
      component: Home
    },
    {
      path: '/auth/password/email',
      component: ForgotPassword
    }
  ]
});
