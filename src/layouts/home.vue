<template>
  <AppHeader />
  <aside class="fixed bottom-0 left-0 top-[--header-height] hidden w-[--sidebar-width] overflow-y-auto border-r border-gray-200 px-6 py-8 lg:block dark:border-gray-800">
    <SectionsVerticalNavigation />
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
