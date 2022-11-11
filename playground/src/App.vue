<script setup lang="ts">
import { UButton, UIcon, ULink } from 'unstyled-design'
</script>

<template>
  <div class="mt-10 space-y-3 text-center">
    <div class="space-x-3">
      <UButton>Default Button</UButton>
      <UButton icon="i-carbon-data-enrichment">
        Icon Button
      </UButton>
    </div>

    <div class="space-x-3">
      <ULink target="_blank" href="https://www.hongbusi.com">
        Link
      </ULink>
    </div>

    <div class="space-x-3">
      <UIcon icon="i-carbon-sU" />
      <UIcon icon="i-carbon-moon" />
    </div>
  </div>
</template>
