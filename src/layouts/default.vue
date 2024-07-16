<script setup lang="ts">
const links = [
  { label: 'Dashboard', to: '/', icon: 'i-ph-house' },
  { label: 'Search', to: '/search', icon: 'i-ph-magnifying-glass' },
  { label: 'Schedule', to: '/schedule', icon: 'i-ph-calendar-dots' },
  { label: 'Scholarship', to: '/scholarship', icon: 'i-ph-money-wavy' },
  { label: 'Music Room', to: '/music', icon: 'i-ph-music-notes' },
  { label: 'Sport', to: '/sport', icon: 'i-ph-barbell' },
  { label: 'Extension', to: '/extension', icon: 'i-ph-puzzle-piece' },
]
</script>

<template>
  <AppHeader />
  <aside class="fixed bottom-0 left-0 top-[--header-height] hidden w-[--sidebar-width] overflow-y-auto border-r border-gray-200 px-6 py-8 lg:block dark:border-gray-800">
    <UVerticalNavigation :links="links" />
  </aside>
  <main
    v-bind="$attrs"
    class="lg:pl-[--sidebar-width]"
  >
    <UContainer>
      <slot />
    </UContainer>
  </main>
</template>
