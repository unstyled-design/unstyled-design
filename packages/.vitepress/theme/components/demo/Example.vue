<script setup lang="ts">
defineProps({
  file: {
    type: String,
    required: true
  },
  demo: {
    type: Function,
    required: true
  }
})
</script>

<template>
  <div class="p-4 m-1 bg-var(--bg-color)">
    <ClientOnly>
      <component :is="demo" v-if="demo" v-bind="$attrs" />
    </ClientOnly>
  </div>
</template>
