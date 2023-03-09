<script setup lang="ts">
import { computed } from 'vue'
import { useToggle } from '@vueuse/core'
import Example from './demo/Example.vue'
import SourceCode from './demo/SourceCode.vue'

const props = defineProps<{
  demos: object
  source: string
  path: string
  rawSource: string
  description?: string
}>()

const [sourceVisible, toggleSourceVisible] = useToggle()

const formatPathDemos = computed(() => {
  const demos = {}

  Object.keys(props.demos).forEach((key) => {
    demos[key.replace('./', '').replace('.vue', '')] = props.demos[key]
  })

  return demos
})

const demosKey = computed(() => props.path.slice(props.path.search('/') + 1))

const decodedDescription = computed(() =>
  decodeURIComponent(props.description!),
)
</script>

<template>
  <ClientOnly>
    <p class="text-sm" v-html="decodedDescription" />

    <div class="border border-#3c3c3c1f dark:border-#5454547a rounded">
      <Example :file="path" :demo="formatPathDemos[demosKey]" />

      <div class="w-full h-1px bg-#3c3c3c1f dark:bg-#5454547a" />

      <div class="flex justify-end items-center p-2">
        <div @click="toggleSourceVisible()">
          <UIcon icon="i-carbon-code" class="cursor-pointer" />
        </div>
      </div>

      <SourceCode v-show="sourceVisible" :source="source" />
    </div>
  </ClientOnly>
</template>
