<script setup lang="ts">
// @ts-expect-error missing types
import _contributors from 'virtual:contributors'
</script>

<template>
  <div class="flex flex-wrap gap-4 pt-2">
    <div v-for="c of _contributors" :key="c.hash" class="flex gap-2 items-center">
      <img :src="`https://gravatar.com/avatar/${c.hash}?d=retro`" class="w-8 h-8 rounded-full">
      {{ c.name }}
    </div>
  </div>
</template>
