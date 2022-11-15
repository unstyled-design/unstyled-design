<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  source: {
    type: String,
    required: true
  }
})

const decoded = computed(() => {
  return decodeURIComponent(props.source)
})
</script>

<template>
  <div>
    <div class="language-vue" v-html="decoded" />
  </div>
</template>
