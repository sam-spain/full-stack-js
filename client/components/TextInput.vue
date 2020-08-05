<template>
  <section class="mb-5">
    <label class="block text-gray-700 text-sm font-bold" :for="inputId">
      {{ labelText }}
    </label>
    <input
      :id="inputId"
      :value="value"
      :type="inputType"
      class="w-full bg-gray-200 py-3 text-blue-400 p-3 mb-2"
      :placeholder="inputPlaceholder"
      @input="$emit('input', $event.target.value)"
    />
    <span v-if="errorText" class="w-full py-3 text-red-400 p-1 mb-2">{{ errorText }}</span>
  </section>
</template>

<script>
export default {
  props: {
    inputPlaceholder: {
      type: String,
      required: true
    },
    inputType: {
      type: String,
      required: false,
      default: 'text'
    },
    inputId: {
      type: String,
      required: true
    },
    labelText: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: false,
      default: ''
    },
    errorText: {
      type: String,
      required: false,
      default: ''
    }
  },
  emits: { input: null }
};
</script>
