<template>
  <div class="my-32">
    <h1 v-if="!auth" class="text-center text-blue-700 text-6xl">
      Mevn Auth
    </h1>
    <h1 v-else class="text-center text-blue-700 text-6xl">
      <span>Hello {{ user.name }}</span>
    </h1>
  </div>
</template>
