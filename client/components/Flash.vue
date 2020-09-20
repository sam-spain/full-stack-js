<template>
  <div>
    <div
      v-for="message in flashMessages"
      :key="message.id"
      class="w-full h-12 text-green-700 bg-green-300 flex items-center justify-center"
      :class="{ 'bg-green-500': message.type === 'success', 'bg-red-500': message.type === 'error'}"
    >
      {{ message.message }}
    </div>
  </div>
</template>
