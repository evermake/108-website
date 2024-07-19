<script lang="ts" setup>
import { useUsersGetMe, useUsersGetPredefined } from '~/api/events'

definePageMeta({ layout: 'home' })

const { me, meError } = useMe()
const { data: eventsMe } = useUsersGetMe()
const { data: eventsPredefined } = useUsersGetPredefined()
</script>

<template>
  <div class="pt-8">
    <h1 class="text-2xl">
      Welcome to <i>one-zero-eight!</i>
    </h1>

    <pre>{{ me }}</pre>
    <pre>{{ meError }}</pre>
    <pre>{{ eventsMe }}</pre>
    <pre>{{ eventsPredefined }}</pre>
  </div>
</template>
