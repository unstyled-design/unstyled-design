<script setup lang="ts">
import { computed } from 'vue'
// @ts-expect-error missing types
import _contributors from 'virtual:contributors'
import type { ContributorInfo } from '../../../../scripts/contributors'

const props = defineProps<{ component: string }>()

const contributors = computed(() => _contributors[props.component] || [] as ContributorInfo[])
</script>

<template>
  <div class="flex flex-wrap gap-4 pt-2">
    <div v-for="c of contributors" :key="c.hash">
      <Link
        :href="`https://github.com/${c.name}`"
        class="flex gap-2 items-center text-[var(--vp-c-text-1)]! hover:text-[var(--vp-c-brand)]!"
        no-icon
      >
        <img :src="`https://gravatar.com/avatar/${c.hash}?d=retro`" class="w-8 h-8 rounded-full">
        {{ c.name }}
      </Link>
    </div>
  </div>
</template>
