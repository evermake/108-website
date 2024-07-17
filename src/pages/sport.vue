<script lang="ts" setup>
useHead({ title: 'Sport' })
</script>

<template>
  <div class="py-8">
    <div class="flex flex-col items-stretch justify-between gap-4 lg:flex-row">
      <CardLink
        title="Telegram Bot"
        subtitle="Easily check-in to classes via Telegram."
        icon="i-ph-robot"
        to="https://t.me/IUSportBot"
      />
      <CardLink
        title="Website"
        subtitle="Official sport website for Innopolis students."
        icon="i-ph-globe"
        to="https://sport.innopolis.university/profile"
      />
    </div>
  </div>
</template>
