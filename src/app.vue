<script lang="ts" setup>
useHead({
  titleTemplate: t => !t ? 'InNoHassle' : `${t} • InNoHassle`,
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
