<template>
  <header class="sticky top-0 z-50 h-[--header-height] border-b border-gray-200 bg-white/35 backdrop-blur dark:border-gray-800 dark:bg-gray-900/75">
    <UContainer class="flex h-full items-center justify-between">
      <div class="flex items-center justify-start lg:flex-1">
        <NuxtLink to="/">
          <NuxtImg class="h-[48px] dark:hidden" src="/img/innohassle-logo-light.svg" />
          <NuxtImg class="hidden h-[48px] dark:block" src="/img/innohassle-logo-dark.svg" />
        </NuxtLink>
      </div>
      <nav class="hidden lg:flex lg:items-center lg:justify-between lg:gap-4">
        <NuxtLink
          to="/"
          class="hover:text-primary font-medium"
          active-class="text-primary"
        >
          Home
        </NuxtLink>
        <NuxtLink
          to="/about"
          class="hover:text-primary font-medium"
          active-class="text-primary"
        >
          About
        </NuxtLink>
      </nav>
      <div class="flex items-center justify-end gap-2 lg:flex-1">
        <ThemeToggle />
        <UButton
          variant="ghost"
          icon="i-ph-github-logo"
          to="https://github.com/one-zero-eight"
        />
        <UButton
          variant="ghost"
          icon="i-ph-telegram-logo"
          to="https://t.me/one_zero_eight"
        />
      </div>
    </UContainer>
  </header>
</template>
