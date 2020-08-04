<template>
  <div class="container my-16 w-full mx-auto">
    <div class="max-w-xs mx-auto">
      <h2 class="text-center text-3xl text-blue-700">
        Register
      </h2>
      <div class="w-full bg-white shadow rounded-sm mt-5 p-12">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="register-username"
        >
          Username
        </label>
        <input
          id="register-username"
          type="text"
          class="w-full bg-gray-200 py-3 text-blue-400 p-3 mb-5"
          placeholder="Your Name Here"
        />
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="register-password"
        >
          Password
        </label>
        <input
          id="register-password"
          type="password"
          class="w-full bg-gray-200 py-3 text-blue-400 p-3 mb-5"
          placeholder="Your Email Here"
        />
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="register-email"
        >
          Email
        </label>
        <input
          id="register-email"
          type="email"
          class="w-full bg-gray-200 py-3 text-blue-400 p-3"
          placeholder="Your Password Here"
        />
        <button
          class="w-full mt-3 py-3 bg-blue-600 hover:bg-blue-400 text-white rounded-sm"
        >
          Register
        </button>
      </div>
    </div>
  </div>
</template>
