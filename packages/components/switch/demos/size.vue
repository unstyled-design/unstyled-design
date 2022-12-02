<script setup lang="ts">
import { ref } from 'vue'

const value = ref(true)
</script>

<template>
  <u-space>
    <u-switch v-model="value" class="text-xs" />
    <u-switch v-model="value" />
    <u-switch v-model="value" class="text-xl" />
  </u-space>
</template>
