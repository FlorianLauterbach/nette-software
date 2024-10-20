<template>
  <NuxtImg :src="image" class="logo" :alt="`${title} Logo`"
    :sizes="{ xs: 320, sm: 640, md: 768, lg: 1024, xl: 1280, xxl: 1536 }" />
</template>

<script setup>
import { computed, defineProps } from 'vue';
const props = defineProps(['technology'])

const image = computed(() => {
  let img = props.technology.title.replaceAll(/\s/g, '')
  return `/images/technologies/${img.toLowerCase()}-logo.webp`
})

const title = computed(() => {
  return props.technology.title
})
</script>

<style scoped>
.logo {
  width: 100%;
  max-width: 35%;
}
</style>