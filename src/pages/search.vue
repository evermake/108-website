<script lang="ts" setup>
type SearchVariant = 'search' | 'ai'

const variant = ref<SearchVariant>('search')

function setSearchVariant(newVariant: SearchVariant) {
  variant.value = newVariant
}
</script>

<template>
  <div class="py-8">
    <div class="flex w-full items-center gap-2">
      <UInput
        class="grow"
        placeholder="Find anything..."
        autofocus
      />
      <UButtonGroup>
        <UButton
          :variant="variant === 'search' ? 'solid' : 'outline'"
          icon="i-ph-magnifying-glass"
          @click="setSearchVariant('search')"
        >
          Search
        </UButton>
        <UButton
          :variant="variant === 'ai' ? 'solid' : 'outline'"
          icon="i-ph-brain"
          @click="setSearchVariant('ai')"
        >
          Ask AI
        </UButton>
      </UButtonGroup>
    </div>
    <UDivider class="my-4" />
    <div class="flex flex-col gap-4">
      <USkeleton
        v-for="(_, i) in Array.from({ length: 10 }).fill(null)"
        :key="i"
        class="h-[100px] w-full"
      />
    </div>
  </div>
</template>
