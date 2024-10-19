<template>
  <NuxtLayout name="default">
    <div class="not-found d-flex justify-content-center align-items-center">
      <div class="text-center">
        <h1>⚠️ 404 ⚠️</h1>
        <h2>Seite nicht gefunden</h2>
        <p>Vielleicht möchtest du stattdessen</p>
        <NuxtLink to="/" class="btn btn-primary btn-lg">Zur Startseite</NuxtLink>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
useSeoMeta({
  title: '404 - NetteSoftware',
  ogTitle: 'NetteSoftware Blog – Web- und App-Entwicklung Insights',
  description: 'Entdecken Sie wertvolle Tipps und Neuigkeiten rund um Web- und App-Entwicklung im NetteSoftware Blog. Erhalten Sie Experteneinblicke und Best Practices.',
  ogDescription: 'Im NetteSoftware Blog teilen wir wertvolles Wissen und Neuigkeiten zur Web- und App-Entwicklung. Entdecken Sie unsere Expertentipps.',
  ogImage: 'https://nette-software.de/images/logo.webp',
  twitterCard: 'summary_large_image',
})
</script>

<style scoped>
.not-found {
  height: 70vh;
}
</style>