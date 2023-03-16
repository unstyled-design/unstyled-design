<script setup lang="ts">
import Icon from '../icon/Icon.vue'

defineProps<{ isExternal?: boolean }>()
</script>

<template>
  <a class="u-link" :rel="isExternal ? 'noopener' : undefined" :target="isExternal ? '_blank' : undefined">
    <slot />
    <Icon v-if="isExternal" icon="i-tabler-external-link" />
  </a>
</template>
