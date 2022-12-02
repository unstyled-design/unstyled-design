<script setup lang="ts">
import { ref } from 'vue'

const value = ref(true)
</script>

<template>
  <u-switch v-model="value" />
</template>
