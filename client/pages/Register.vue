<template>
  <div class="container my-16 w-full mx-auto">
    <div class="max-w-md mx-auto">
      <h2 class="text-center text-3xl text-blue-700">
        Register
      </h2>
      <ValidationObserver ref="form" v-slot="{ handleSubmit }">
        <form
          class="w-full bg-white shadow rounded-sm mt-5 p-12"
          @submit.prevent="handleSubmit(onSubmit)"
        >
          <validation-provider
            v-slot="{ errors }"
            name="name"
            rules="required|alpha_dash"
          >
            <text-input
              v-model="model.name"
              :value="model.name"
              input-placeholder="Your name here!"
              input-id="name"
              label-text="Username"
              :error-text="errors[0]"
            />
          </validation-provider>
          <validation-provider
            v-slot="{ errors }"
            name="email"
            rules="required|email"
          >
            <text-input
              v-model="model.email"
              :value="model.email"
              input-placeholder="Your email here!"
              input-type="email"
              input-id="email"
              label-text="Email"
              :error-text="errors[0]"
            />
          </validation-provider>
          <validation-provider
            v-slot="{ errors }"
            name="password"
            rules="required|min:4"
          >
            <text-input
              v-model="model.password"
              :value="model.password"
              input-placeholder="Your password here!"
              input-type="password"
              input-id="password"
              label-text="Password"
              :error-text="errors[0]"
            />
          </validation-provider>
          <button-component
            label="Register"
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
import { POST_REGISTER } from '@store/auth/actions.js';
export default {
  name: 'RegistrationForm',
  mixins: [formMixin],
  data: () => ({
    model: {
      name: '',
      email: '',
      password: ''
    }
  }),
  methods: {
    onSubmit() {
      this.toggleLoading();
      this.$store
        .dispatch(POST_REGISTER, this.model)
        .then((response) => {
          this.toggleLoading();
          this.setAuth(response.data);
        })
        .catch((error) => {
          this.toggleLoading();
          this.$refs.form.setErrors(error.response.data);
        });
    }
  }
};
</script>
