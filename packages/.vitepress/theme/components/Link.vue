<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  href?: string
  noIcon?: boolean
}>()

const isExternal = computed(() => props.href && /^[a-z]+:/i.test(props.href))
</script>

<template>
  <component
    :is="href ? 'a' : 'span'"
    class="flex text-center"
    :class="{ link: href }"
    :href="href"
    :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'noopener noreferrer' : undefined"
  >
    <slot />
    <UIcon v-if="isExternal && !noIcon" icon="i-carbon-arrow-up-right" class="ml-4" />
  </component>
</template>
