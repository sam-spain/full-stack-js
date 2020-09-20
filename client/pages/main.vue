<template>
  <div>
    <div
      v-if="auth && !confirmed"
      class="w-full h-12 text-blue-700 bg-blue-300 flex items-center justify-center"
    >
      You have not confirmed your email address.
      <span class="cursor-pointer hover:text-blue-900" @click="resendEmailConfirm">
        &nbsp;Click here to resend confirmation link.
      </span>
    </div>
    <div class="h-2 w-full bg-blue-400" />
    <div class="w-full h-12 flex items-center justify-between px-6">
      <router-link class="text-blue-400" to="/">
        MEVN
      </router-link>
      <div v-if="!auth">
        <router-link class="no-underline text-blue-700" to="/auth/login">
          Sign In
        </router-link>
        <router-link
          class="no-underline text-blue-700 border-2 px-3 py-2 hover:text-blue-400 hover:border-blue-200 rounded-full border-blue-400 ml-3"
          to="/auth/register"
        >
          Join Now
        </router-link>
      </div>
      <div v-else>
        <span
          class="cursor-pointer text-blue-400 hover:text-blue-700"
          @click="unsetAuth"
        >
          Logout
        </span>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'MainComponent'
};
</script>
