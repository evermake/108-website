<script setup lang="ts">
const route = useRoute()
const expanded = ref(false)
const expanding = ref(false)

if (import.meta.client) {
  const scrollLocked = useScrollLock(document.body)

  watchEffect(() => {
    scrollLocked.value = expanded.value
  })
}

watch(() => route.fullPath, () => {
  expanded.value = false
})
</script>

<template>
  <div class="h-[--header-height] w-full" />
  <header
    v-bind="$attrs"
    :key="$route.fullPath"
    class="group/header fixed left-0 top-0 z-50 size-full max-h-[--header-height] overflow-hidden bg-white/75 px-6 backdrop-blur transition-[max-height] duration-300 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-gray-200 after:content-[''] data-[expanded]:max-h-full lg:overflow-visible lg:data-[expanded]:max-h-[--header-height] dark:bg-gray-900/85 dark:after:bg-gray-800"
    :data-expanded="expanded || undefined"
    :data-expanding="expanding || undefined"
    @transitionstart="expanding = true"
    @transitioncancel="expanding = true"
    @transitionend="expanding = false"
  >
    <div class="flex h-[--header-height] items-center justify-between">
      <div class="flex items-center justify-start lg:flex-1">
        <NuxtLink to="/">
          <NuxtImg
            src="/img/innohassle-logo-light.svg"
            class="h-[48px] dark:hidden"
          />
          <NuxtImg
            src="/img/innohassle-logo-dark.svg"
            class="hidden h-[48px] dark:block"
          />
        </NuxtLink>
      </div>
      <nav class="hidden items-center justify-between gap-4 lg:flex">
        <AppHeaderNavLink to="/">
          Home
        </AppHeaderNavLink>
        <AppHeaderNavLink to="/changelog">
          Changelog
        </AppHeaderNavLink>
        <AppHeaderNavLink to="/about">
          About
        </AppHeaderNavLink>
      </nav>
      <div class="flex flex-1 items-center justify-end gap-2">
        <UButton
          class="hidden lg:flex"
          variant="ghost"
          color="gray"
          icon="i-ph-telegram-logo"
          to="https://t.me/one_zero_eight"
          target="_blank"
        />
        <UButton
          class="hidden lg:flex"
          variant="ghost"
          color="gray"
          icon="i-ph-github-logo"
          to="https://github.com/one-zero-eight"
          target="_blank"
        />
        <UButton
          class="hidden lg:flex"
          variant="ghost"
          color="gray"
          icon="i-ph-youtube-logo"
          to="https://youtube.com/@one-zero-eight"
          target="_blank"
        />
        <span class="hidden h-[32px] w-px bg-gray-200 lg:block dark:bg-gray-800" />
        <ThemeToggle color="gray" />
        <UButton
          class="lg:hidden"
          variant="ghost"
          color="gray"
          :icon="expanded ? 'i-ph-x' : 'i-ph-list'"
          @click="expanded = !expanded"
        />
      </div>
    </div>
    <div class="flex h-[calc(100%-var(--header-height))] flex-col gap-4 overflow-y-auto py-6 font-medium group-data-[expanding]/header:overflow-y-hidden lg:hidden lg:font-normal">
      <AppHeaderNavLink
        class="text-lg"
        to="/"
      >
        Home
      </AppHeaderNavLink>
      <SectionsVerticalNavigation />
      <AppHeaderNavLink
        class="text-lg"
        to="/changelog"
      >
        Changelog
      </AppHeaderNavLink>
      <AppHeaderNavLink
        class="text-lg"
        to="/about"
      >
        About
      </AppHeaderNavLink>
      <UDivider label="Follow us" />
      <div class="flex items-center justify-center gap-2">
        <UButton
          variant="ghost"
          color="gray"
          icon="i-ph-telegram-logo"
          size="xl"
          to="https://t.me/one_zero_eight"
          target="_blank"
        />
        <UButton
          variant="ghost"
          color="gray"
          icon="i-ph-github-logo"
          size="xl"
          to="https://github.com/one-zero-eight"
          target="_blank"
        />
        <UButton
          variant="ghost"
          color="gray"
          icon="i-ph-youtube-logo"
          size="xl"
          to="https://youtube.com/@one-zero-eight"
          target="_blank"
        />
      </div>
    </div>
  </header>
</template>
