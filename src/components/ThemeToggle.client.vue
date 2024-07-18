<script lang="ts" setup>
const colorMode = useColorMode()

function toggleColorMode() {
  colorMode.preference = colorMode.preference === 'system'
    ? 'light'
    : colorMode.preference === 'light'
      ? 'dark'
      : 'system'
}

const tooltipText = computed<string>(() => {
  switch (colorMode.preference) {
    case 'system':
      return 'Switch to light'
    case 'light':
      return 'Switch to dark'
  }
  return 'Switch to system'
})
</script>

<template>
  <UTooltip :text="tooltipText">
    <UButton
      v-if="colorMode.preference === 'system'"
      icon="i-ph-monitor"
      color="gray"
      variant="ghost"
      @click="toggleColorMode"
    />
    <UButton
      v-else-if="colorMode.value === 'light'"
      icon="i-ph-sun"
      color="gray"
      variant="ghost"
      @click="toggleColorMode"
    />
    <UButton
      v-else
      icon="i-ph-moon"
      color="gray"
      variant="ghost"
      @click="toggleColorMode"
    />
  </UTooltip>
</template>
