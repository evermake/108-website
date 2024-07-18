<script lang="ts" setup>
import type { NuxtLinkProps } from '#app'

withDefaults(
  defineProps<NuxtLinkProps>(),
  {
    noPrefetch: undefined,
    prefetch: undefined,
  },
)
</script>

<template>
  <NuxtLink
    class="hover:text-primary"
    v-bind="$props"
    :active-class="['text-primary', $props.activeClass].join(' ')"
  >
    <slot />
  </NuxtLink>
</template>
