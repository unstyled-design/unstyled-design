<script setup lang="ts">
import { UnButton, UnIcon, UnLink } from 'unstyled-design'
</script>

<template>
  <div class="mt-10 space-y-3 text-center">
    <div class="space-x-3">
      <UnButton>Default Button</UnButton>
      <UnButton icon="i-carbon-data-enrichment">
        Icon Button
      </UnButton>
    </div>

    <div class="space-x-3">
      <UnLink target="_blank" href="https://www.hongbusi.com">
        Link
      </UnLink>
    </div>

    <div class="space-x-3">
      <UnIcon icon="i-carbon-sun" />
      <UnIcon icon="i-carbon-moon" />
    </div>
  </div>
</template>
