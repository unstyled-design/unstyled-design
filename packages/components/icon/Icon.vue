<script setup lang="ts">
defineProps<{ icon: string }>()
</script>

<template>
  <i class="u-icon" :class="icon" />
</template>
