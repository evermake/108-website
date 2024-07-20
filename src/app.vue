<script lang="ts" setup>
const colorMode = useColorMode()

useHead({
  titleTemplate: t => !t ? 'InNoHassle' : `${t} • InNoHassle`,
  link: [
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
    { rel: 'icon', type: 'image/svg+xml', sizes: 'any', href: '/favicon.svg' },
  ],
  meta: () => ([
    { name: 'theme-color', content: colorMode.value === 'dark' ? '#171717' : '#ffffff' },
  ]),
})

onMounted(() => {
  // Hack to enable triggering :hover on clicks in Safari on iOS.
  // https://stackoverflow.com/a/72296894/13928742
  document.body.onclick = () => {}
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
