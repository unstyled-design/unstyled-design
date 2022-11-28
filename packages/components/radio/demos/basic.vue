<script setup lang="ts">
import { ref } from 'vue'

const value = ref('radio1')
</script>

<template>
  <u-space>
    <u-radio v-model="value" value="radio1">
      Radio1
    </u-radio>
    <u-radio v-model="value" value="radio2">
      Radio2
    </u-radio>
  </u-space>
</template>
