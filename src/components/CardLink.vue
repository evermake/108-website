<script lang="ts" setup>
import type { NuxtLinkProps } from '#app'

defineProps<{
  title: string
  subtitle: string
  icon: string
  to: NuxtLinkProps['to']
}>()
</script>

<template>
  <div class="hover:border-primary-400 dark:hover:border-primary-800 group relative w-full overflow-hidden rounded-md border px-6 py-4 shadow-sm dark:border-gray-800 dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-900">
    <h3 class="mb-1 flex items-center gap-2 text-lg font-medium">
      <UIcon :name="icon" />
      <span>{{ title }}</span>
    </h3>
    <p class="text-sm text-gray-600 dark:text-gray-400">
      {{ subtitle }}
    </p>
    <UIcon
      name="i-ph-arrow-square-out"
      class="group-hover:text-primary-600 absolute right-4 top-4 text-lg"
    />
    <NuxtLink
      :to="to"
      target="_blank"
    >
      <span class="absolute left-0 top-0 size-full" />
    </NuxtLink>
  </div>
</template>
