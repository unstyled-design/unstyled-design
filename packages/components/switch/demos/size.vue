<script setup lang="ts">
import { ref } from 'vue'

const value = ref(true)
</script>

<template>
  <u-space>
    <u-switch v-model="value" size="small" />
    <u-switch v-model="value" />
    <u-switch v-model="value" size="large" />
  </u-space>
</template>
