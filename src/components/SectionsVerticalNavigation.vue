<script lang="ts" setup>
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
  <UVerticalNavigation :links="links" />
</template>
