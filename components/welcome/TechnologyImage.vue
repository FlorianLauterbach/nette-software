<template>
  <NuxtImg :src="image" class="logo" :alt="`${title} Logo`" />
</template>

<script setup>
import { ref, computed, defineProps } from 'vue';
const props = defineProps(['technology'])

const image = computed(() => {
  let img = props.technology.title.replaceAll(/\s/g, '')
  return `/images/technologies/${img.toLowerCase()}-logo.png`
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