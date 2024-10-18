<template>
  <div id="blog-eintraege" class="container py-5">
    <NuxtLayout name="default">
      <h1>Blog</h1>

      <div class="pt-5">
        <NuxtLink :to="`blog/${post.slug}`" class="blog-link row" v-for="post in paginatedPosts" :key="post.slug">
          <div class="col-md-4">
            <img :src="post.image ? `/images/blog/${post.slug}/${post.image}` : '/images/logo.png'"
              class="img-fluid rounded" alt="Bild">
          </div>
          <div class="col-md-8">
            <div class="card-body pl-2">
              <h5 class="card-title gradient-text">{{ post.title }}</h5>
              <p class="card-text">{{ post.description }}</p>
              <p class="card-text"><small class="text-muted">{{ post.date }}</small></p>
            </div>
          </div>
        </NuxtLink>

        <nav class="pt-5">
          <ul class="pagination justify-content-center">
            <li class="page-item" :class="{ disabled: currentPage === 1 }">
              <button class="page-link" @click="prevPage" :disabled="currentPage === 1">Zurück</button>
            </li>

            <li class="page-item" v-for="page in totalPages" :key="page" :class="{ active: currentPage === page }">
              <button class="page-link" @click="currentPage = page">{{ page }}</button>
            </li>

            <li class="page-item" :class="{ disabled: currentPage === totalPages }">
              <button class="page-link" @click="nextPage" :disabled="currentPage === totalPages">Weiter</button>
            </li>
          </ul>
        </nav>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { blogPosts } from '~/data/blogPosts.js'

const postsPerPage = 1
const currentPage = ref(1)
const totalPages = computed(() => Math.ceil(blogPosts.length / postsPerPage))

const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * postsPerPage
  return blogPosts.slice(start, start + postsPerPage)
})

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}

useSeoMeta({
  title: 'NetteSoftware Blog – Web- und App-Entwicklung Insights',
  ogTitle: 'NetteSoftware Blog – Web- und App-Entwicklung Insights',
  description: 'Entdecken Sie wertvolle Tipps und Neuigkeiten rund um Web- und App-Entwicklung im NetteSoftware Blog. Erhalten Sie Experteneinblicke und Best Practices.',
  ogDescription: 'Im NetteSoftware Blog teilen wir wertvolles Wissen und Neuigkeiten zur Web- und App-Entwicklung. Entdecken Sie unsere Expertentipps.',
  ogImage: 'https://nette-software.de/images/logo.png',
  twitterCard: 'summary_large_image',
})
</script>

<style scoped></style>