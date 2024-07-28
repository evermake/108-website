<script lang="ts" setup>
import { animate } from 'motion'
import type { MemberInfo } from '~/components/MemberAvatar.vue'

useHead({ title: 'About' })

let members: Ref<MemberInfo[] | undefined>
if (import.meta.client) {
  const { data, error } = useMembers()
  members = data

  watch(error, (newMembersError) => {
    console.error('Failed to load members:', newMembersError)
  })
}
else {
  members = ref(undefined)
}

const membersShuffled = computed(() => {
  if (members.value) {
    const copy = [...members.value]
    shuffle(copy)
    return copy
  }
  return undefined
})

interface PhotoInfo {
  path: string
}
const photos: PhotoInfo[] = [
  { path: '/img/108-photos/slippers.jpg' },
  { path: '/img/108-photos/hackaton.jpg' },
  { path: '/img/108-photos/ruslan-gosling.jpg' },
  { path: '/img/108-photos/movie-contest.jpg' },
  { path: '/img/108-photos/garage.jpg' },
  { path: '/img/108-photos/podcast.jpg' },
]

const heading = ref<HTMLHeadingElement>()

onMounted(() => {
  animate(
    heading.value!,
    {
      transform: ['translateY(-12px)', 'translateY(0)'],
      opacity: [0, 1],
      filter: ['blur(8px)', 'blur(0)'],
    },
    { duration: 1.2 },
  )
})
</script>

<template>
  <article class="w-full px-6">
    <div class="about-108 pointer-events-none absolute inset-0 z-[-1]" />
    <div class="prose mx-auto pb-12 pt-24 dark:prose-invert">
      <h1
        ref="heading"
        class="text-center italic opacity-0"
      >
        one-zero-eight
      </h1>

      <section>
        <h2>What is it?</h2>

        <p><i>one-zero-eight</i> (or just 108) — is a community of Innopolis University students passionate about technology. Our mission is to create the perfect environment for student life at our university.</p>

        <p>Currently, we face many hassles and see the gaps in our daily life. Have you experienced the long page loads? Have you ever had difficulty finding the right information? Do you really find the interfaces convenient and attractive? Do you have an interesting idea but think no one will ever implement it? We felt all of this.</p>

        <p>Who is going to fix this and make the word "innovative" not just an advertising slogan? Unfortunately, we don't know. Maybe, it is us?</p>
      </section>

      <section>
        <h2>What is InNoHassle?</h2>

        <p>InNoHassle (Innopolis without hassles) — is our primary project with a goal to combine all university services into one smart, convenient, performant, and beautiful ecosystem.</p>
      </section>

      <section>
        <h2>Team</h2>

        <p>We are a small team of students from all over the world (i.e. Russia) who have accidentally united together by enthusiasm and the desire to make our student life more enjoyable.</p>

        <div
          v-if="membersShuffled"
          class="not-prose flex flex-wrap items-start justify-center gap-4"
        >
          <MemberAvatar
            v-for="member in membersShuffled"
            :key="member.fullname"
            :member="member"
          />
        </div>
      </section>

      <section>
        <h2>Want to join?</h2>

        <p>Here is what we can offer you:</p>

        <ul>
          <li>
            <h4>No money</h4>
            <p>We have no sponsors and by spending most of our time on study and university projects for free we don't earn much.</p>
          </li>
          <li>
            <h4>No expert advice</h4>
            <p>We are students just like you with nearly the same amount of experience and knowledge.</p>
          </li>
        </ul>

        <p>But why work <i>for free</i>? Because there are reasons besides money, which are more important to us:</p>

        <ul>
          <li>
            <h4>Team</h4>
            <p>It's impossible to make a huge difference alone. Working together, we get mutual suppot and can achieve more ambitious results.</p>
          </li>
          <li>
            <h4>Freedom</h4>
            <p>We can use any frameworks and technologies to implement our ideas, we have no NDA, we have flexible work schedule and other things that tech companies cannot afford.</p>
          </li>
          <li>
            <h4>Experience</h4>
            <p>University courses give us good theoretical knowledge, but in order to grow as a software engineer it's crucial to gain real world experience and to write <span class="text-nowrap">A LOT of code</span>. This is exactly what we do: we create projects that are actually used by people, <s>unlike your pet projects</s>.</p>
          </li>
          <li>
            <h4>Fun 🎉</h4>
            <p>Probably, the most important part of our work — is having fun! We are young, we are 3 minutes away from each other, we have the university open 24/7 — that's why we often watch movies and eat pizza, play board games and do sports, discuss different things, participate in hackathons, brainstrom and implement interesting ideas at <span class="text-nowrap">4 a.m.</span></p>
          </li>
        </ul>
      </section>

      <section class="my-16 h-[200px] lg:my-24 lg:h-[300px]">
        <div class="no-scroll absolute inset-x-0 flex h-[200px] items-stretch justify-start gap-2 overflow-x-auto overflow-y-hidden px-2 lg:h-[300px]">
          <NuxtImg
            v-for="photo in photos"
            :key="photo.path"
            class="m-0 h-[200px] rounded p-0 opacity-60 transition-opacity duration-300 hover:opacity-100 lg:h-[300px]"
            :quality="80"
            loading="lazy"
            :height="800"
            :placeholder="[300, 200, 40, 4]"
            :src="photo.path"
          />
        </div>
      </section>

      <section>
        <h2>Still want to join?</h2>

        <p>...</p>
      </section>
    </div>
  </article>
</template>

<style scoped>
.about-108 {
  background-image: url('/img/108-bg-pattern-black.svg');
  background-size: 100px 100px;
  background-repeat: repeat;

  mask-position: 0% -300px;
  mask-size: 100% 600px;
  mask-repeat: no-repeat;
  mask-image: radial-gradient(
    closest-side,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(0, 0, 0, 0) 100%
  );
}

.dark .about-108 {
  background-image: url('/img/108-bg-pattern-white.svg');
}
</style>
