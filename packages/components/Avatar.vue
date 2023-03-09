<script setup lang="ts">
import { computed } from 'vue'
import type { SizeType } from './types'

interface Props {
  src?: string | null
  size?: SizeType | number
  name?: string | null
}
const props = defineProps<Props>()

const sizeClasses: Record<SizeType, string> = {
  small: 'u-avatar-small',
  default: 'u-avatar-default',
  large: 'u-avatar-large',
}

const classes = computed(() => [
  props.size ?? sizeClasses.default,
])

const firstLetterUpper = computed(() => props.name?.charAt(0).toUpperCase())
</script>

<template>
  <div class="u-avatar" :class="classes">
    <img v-if="src" class="u-avatar-img" :src="src">
    <p v-else-if="firstLetterUpper" class="u-avatar-text">
      {{ firstLetterUpper }}
    </p>
  </div>
</template>
