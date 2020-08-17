<template>
  <button
    :disabled="disabled"
    class="w-full mt-3 py-3 hover:bg-blue-400 text-white rounded-sm"
    :class="{ 'bg-blue-600': !loading, 'bg-blue-400 cursor-not-allowed': loading }"
    type="submit"
    @click="$emit('click')"
  >
    <loader v-if="loading" />
    <span v-else>{{ label }}</span>
  </button>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    label: {
      type: String,
      required: true
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: { click: null }
};
</script>
