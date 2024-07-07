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
  <div>
    <Header />
    <main class="min-h-[calc(100vh-var(--header-height))]">
      <UContainer class="flex flex-col lg:grid lg:grid-cols-10 lg:gap-6">
        <div class="h-full border-r border-gray-200 lg:col-span-2 dark:border-gray-800">
          <aside class="hidden py-8 pr-6 lg:sticky lg:top-[--header-height] lg:block lg:max-h-[calc(100vh-var(--header-height))]">
            <UVerticalNavigation :links="links" />
          </aside>
        </div>
        <div class="lg:col-span-8">
          <slot />
        </div>
      </UContainer>
    </main>
  </div>
</template>
