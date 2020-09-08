import { SET_AUTH, UNSET_AUTH } from '@store/auth/actions.js';

export default {
  computed: {
    auth() {
      return !!this.$store.state.auth.user;
    },
    user() {
      return this.$store.state.auth.user;
    }
  },
  methods: {
    setAuth(payload) {
      localStorage.setItem('auth', JSON.stringify(payload));
      this.$store.commit(SET_AUTH, payload);
      this.$router.push('/').catch(() => {});
    },
    unsetAuth() {
      localStorage.removeItem('auth');
      this.$store.commit(UNSET_AUTH);
      this.$router.push('/').catch(() => {});
    }
  }
};
