<script setup lang="ts">
import type Colors from '#tailwind-config/theme/colors'

export interface MemberInfo {
  fullname: string
  color: keyof typeof Colors
  bio: string
  hometown?: string | null
  telegram?: string | null
  github?: string | null
}

defineProps<{
  member: MemberInfo
}>()

function avatarBgClass(color: keyof typeof Colors) {
  const base = tw`bg-gradient-to-t`

  let perColor = ''
  switch (color) {
    // Need to explicitly specify colors, so Tailwind will scan them.
    case 'red':
      perColor = tw`from-red-500 to-red-300 dark:from-red-800 dark:to-red-600`
      break
    case 'green':
      perColor = tw`from-green-500 to-green-300 dark:from-green-800 dark:to-green-600`
      break
    case 'purple':
      perColor = tw`from-purple-500 to-purple-300 dark:from-purple-800 dark:to-purple-600`
      break
    default:
      perColor = tw`from-gray-500 to-gray-300 dark:from-gray-800 dark:to-gray-600`
      break
  }

  return `${base} ${perColor}`
}

const OFFSET = 7
// Set a common value despite the actual size of the card, so avatars on the
// same row will open card on the same side (top or bottom).
const TOP_PROTECT = 300
const SIDE_PROTECT = 16

const rootEl = shallowRef<HTMLDivElement>()
const cardEl = shallowRef<HTMLDivElement>()

function onUpdate() {
  if (!rootEl.value || !cardEl.value)
    return

  const rootBounding = rootEl.value.getBoundingClientRect()
  const cardBounding = cardEl.value.getBoundingClientRect()

  // Move card in the middle of root horizontally and `gap` pixels above the root.
  let translateX = (rootBounding.width - cardBounding.width) / 2
  let translateY = -cardBounding.height - OFFSET

  // Stick to the left of the window, if goes over.
  if (rootBounding.left + translateX < SIDE_PROTECT) {
    translateX = -rootBounding.left + SIDE_PROTECT
  }
  // Stick to the right of the window, if goes over.
  else if (rootBounding.left + translateX + cardBounding.width > window.innerWidth - SIDE_PROTECT) {
    translateX = -rootBounding.left + window.innerWidth - cardBounding.width - SIDE_PROTECT
  }

  // Change direction to bottom, if there is not enough space on top.
  if (rootBounding.top < TOP_PROTECT) {
    translateY = rootBounding.height + OFFSET
  }

  cardEl.value.style.transform = `translateX(${translateX}px) translateY(${translateY}px)`
}

useEventListener(window, 'scroll', onUpdate)
useEventListener(window, 'resize', onUpdate)

onMounted(() => {
  onUpdate()
})
</script>

<template>
  <div
    ref="rootEl"
    class="group/member transition-transform hover:z-10 hover:translate-y-[-6px]"
    v-bind="$attrs"
  >
    <div
      ref="cardEl"
      class="invisible absolute left-0 top-0 flex w-[min(300px,calc(100vw-32px))] flex-col gap-2 rounded-lg border border-gray-200 bg-gray-100 p-6 shadow-sm group-hover/member:visible dark:border-gray-700 dark:bg-gray-800"
    >
      <h4 class="flex items-center justify-between">
        <span class="text-lg font-medium">{{ member.fullname }}</span>
        <div class="flex items-center justify-between gap-2 text-xl">
          <NuxtLink
            v-if="member.github"
            :to="`https://github.com/${member.github}`"
            class="leading-[0] text-gray-400 transition-colors hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
            target="_blank"
          >
            <UIcon
              name="i-ph-github-logo"
              class="text-xl"
            />
          </NuxtLink>
          <NuxtLink
            v-if="member.telegram"
            :to="`https://t.me/${member.telegram}`"
            class="leading-[0] text-gray-400 transition-colors hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
            target="_blank"
          >
            <UIcon
              name="i-ph-telegram-logo"
              class="text-xl"
            />
          </NuxtLink>
        </div>
      </h4>
      <div class="items flex flex-col items-start">
        <p
          v-if="member.hometown"
          class="inline-flex items-center gap-1 text-gray-500 dark:text-gray-400"
        >
          <UIcon name="i-ph-map-pin" />
          <span>{{ member.hometown }}</span>
        </p>
      </div>

      <p>{{ member.bio }}</p>

      <div class="absolute left-[-10px] top-[-10px] z-[-1] size-[calc(100%+20px)]" />
    </div>
    <div class="relative">
      <UAvatar
        :alt="member.fullname"
        size="xl"
        class="cursor-default opacity-70 transition-opacity group-hover/member:opacity-100"
        :ui="{
          background: avatarBgClass(member.color),
          placeholder: 'text-white dark:text-whit select-none',
        }"
      />
    </div>
  </div>
</template>
