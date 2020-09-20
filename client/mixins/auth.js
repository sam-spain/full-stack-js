import {
  SET_AUTH,
  UNSET_AUTH,
  POST_RESEND_CONFIRM_EMAIL
} from '@store/auth/actions.js';

export default {
  computed: {
    auth() {
      return !!this.$store.state.auth.user;
    },
    user() {
      return this.$store.state.auth.user;
    },
    confirmed() {
      return !!this.$store.state.auth.user.emailConfirmedAt;
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
      this.flash('Successfully logged out.');
      this.$router.push('/').catch(() => {});
    },
    resendEmailConfirm() {
      this.$store
        .dispatch(POST_RESEND_CONFIRM_EMAIL)
        .then(() => {
          this.flash('Resend success');
          this.$router.push('/').catch(() => {});
        })
        .catch(() => {
          this.flash('Resend error', 'error');
          this.$router.push('/').catch(() => {});
        });
    }
  }
};
