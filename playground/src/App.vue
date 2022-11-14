<script setup lang="ts">
import { UButton, UIcon, ULink } from 'unstyled-design'
</script>

<template>
  <div class="mt-10 space-y-3 text-center">
    <div class="space-x-3">
      <UButton>
        Default Button
      </UButton>
      <UButton type="primary">
        Primary Button
      </UButton>
      <UButton type="success">
        success Button
      </UButton>
      <UButton type="warning">
        Warning Button
      </UButton>
      <UButton type="info">
        Info Button
      </UButton>
      <UButton type="danger">
        Danger Button
      </UButton>
    </div>

    <div class="space-x-3">
      <UButton size="large">
        Large Button
      </UButton>
      <UButton>Default Button</UButton>
      <UButton size="small">
        Small Button
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
