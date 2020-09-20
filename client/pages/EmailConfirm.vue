<template>
  <h1 class="text-center my-16">
    Confirming email
  </h1>
</template>

<script>
import { POST_CONFIRM_EMAIL } from '@store/auth/actions.js';

export default {
  mounted() {
    this.$store
      .dispatch(POST_CONFIRM_EMAIL, {
        token: this.$route.params.token
      })
      .then((response) => {
        this.flash('Confirm success');
        this.setAuth(response.data);
      })
      .catch(() => {
        this.flash('Confirm error', 'error');
        this.$router.push('/');
      });
  }
};
</script>
