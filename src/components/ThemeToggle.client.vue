<script lang="ts" setup>
const colorMode = useColorMode()

function toggleColorMode() {
  colorMode.preference = colorMode.preference === 'system'
    ? 'light'
    : colorMode.preference === 'light'
      ? 'dark'
      : 'system'
}
</script>

<template>
  <UButton
    v-if="colorMode.preference === 'system'"
    variant="ghost"
    icon="i-ph-monitor"
    title="Using system color mode."
    @click="toggleColorMode"
  />
  <UButton
    v-else-if="colorMode.value === 'light'"
    variant="ghost"
    icon="i-ph-sun"
    title="Using light color mode."
    @click="toggleColorMode"
  />
  <UButton
    v-else
    variant="ghost"
    icon="i-ph-moon"
    title="Using dark color mode."
    @click="toggleColorMode"
  />
</template>
