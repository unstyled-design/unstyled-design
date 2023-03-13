<script setup lang="ts">
import { computed } from 'vue'
import { isDef, isNumber, isString } from '@hongbusi/utils'
import { addUnit } from '@unstyled-design/utils'
import type { SizeType } from './types'

export interface Props {
  src?: string | null
  size?: SizeType | number
  name?: string | null
}
const props = defineProps<Props>()

const sizeClasses: Record<SizeType, string> = {
  small: 'u-avatar-small',
  medium: 'u-avatar-medium',
  large: 'u-avatar-large',
}

const avatarClass = computed(() => {
  const { size } = props
  const classes = ['u-avatar']
  if (!isDef(size))
    classes.push(sizeClasses.medium)
  else if (isString(size))
    classes.push(sizeClasses[size] ?? sizeClasses.medium)
  return classes
})

const sizeStyle = computed(() => {
  const { size } = props
  if (isNumber(size)) {
    const value = addUnit(size)
    return { width: value, height: value }
  }
  return undefined
})

const firstLetterUpper = computed(() => props.name?.charAt(0).toUpperCase())
</script>

<template>
  <div :class="avatarClass" :style="sizeStyle">
    <img v-if="src" class="u-avatar-img" :src="src">
    <p v-else-if="firstLetterUpper">
      {{ firstLetterUpper }}
    </p>
  </div>
</template>
