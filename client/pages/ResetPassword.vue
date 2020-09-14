<template>
  <div class="container my-16 w-full mx-auto">
    <div class="max-w-md mx-auto">
      <h2 class="text-center text-3xl text-blue-700">
        Reset Your Password
      </h2>
      <ValidationObserver ref="form" v-slot="{ handleSubmit }">
        <form
          class="w-full bg-white shadow rounded-sm mt-5 p-12"
          @submit.prevent="handleSubmit(onSubmit)"
        >
          <validation-provider
            v-slot="{ errors }"
            name="password"
            rules="required|min:4"
          >
            <text-input
              v-model="model.password"
              :value="model.password"
              input-placeholder="Your new password here!"
              input-type="password"
              input-id="password"
              label-text="Password"
              :error-text="errors[0]"
            />
          </validation-provider>
          <button-component
            label="Reset password"
            :disabled="loading"
            :loading="loading"
          />
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import formMixin from '@client/mixins/form.js';
import { POST_RESET_PASSWORD } from '@store/auth/actions.js';
export default {
  name: 'ResetPasswordForm',
  mixins: [formMixin],
  data: () => ({
    model: {
      password: ''
    }
  }),
  methods: {
    onSubmit() {
      this.toggleLoading();
      this.$store
        .dispatch(POST_RESET_PASSWORD, {
          ...this.model,
          token: this.$route.params.token
        })
        .then((response) => {
          this.toggleLoading();
          this.$router.push('/');
        })
        .catch((error) => {
          this.toggleLoading();
          this.$refs.form.setErrors(error.response.data);
        });
    }
  }
};
</script>
