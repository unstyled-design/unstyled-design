<script setup lang="ts">
import { UButton, UIcon, ULink } from 'unstyled-design'
</script>

<template>
  <div class="mt-10 space-y-3 text-center">
    <div class="space-x-3">
      <UButton size="xs">
        xs size
      </UButton>
      <UButton size="sm">
        sm size
      </UButton>
      <UButton>
        base size
      </UButton>
      <UButton size="xl">
        xl size
      </UButton>
      <UButton size="2xl">
        2xl size
      </UButton>
    </div>

    <div class="space-x-3">
      <UButton round>
        Default
      </UButton>
      <UButton type="primary" round>
        Primary
      </UButton>
      <UButton type="success" plain>
        Success
      </UButton>
      <UButton type="warning">
        Warning
      </UButton>
      <UButton type="danger" plain dashed>
        Danger
      </UButton>
      <UButton type="info" dashed>
        Info
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
