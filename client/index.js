import Vue from 'vue';
import Main from './pages/main.vue';
import AuthMixin from '@client/mixins/auth.js';
import FlashMixin from '@client/mixins/flash'
import TextInput from '@components/TextInput.vue';
import './styles/main.css';
import router from './routes';
import VueRouter from 'vue-router';
import {
  ValidationObserver,
  ValidationProvider,
  extend,
  localize
} from 'vee-validate';
import button from '@components/Button.vue';
import loader from '@components/Loader.vue';
import store from './store';
import en from 'vee-validate/dist/locale/en.json';
import * as rules from 'vee-validate/dist/rules';

Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});

extend('required', {
  validate(value) {
    return {
      required: true,
      valid: ['', null, undefined].indexOf(value) === -1
    };
  },
  computesRequired: true
});

localize('en', en);

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('TextInput', TextInput);
Vue.component('ButtonComponent', button);
Vue.component('Loader', loader);
Vue.mixin(AuthMixin);
Vue.mixin(FlashMixin);

Vue.use(VueRouter);

const app = new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(Main)
});
