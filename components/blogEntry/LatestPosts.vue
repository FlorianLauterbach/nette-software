<template>
  <div id="latest-posts" v-if="latestPosts.length">
    <h5>Die letzten Blog Einträge</h5>
    <div class="row">
      <div v-for="post in latestPosts" :key="post.title" class="col-12 col-md-6">
        <NuxtLink :to="`blog/${post.slug}`" class="card blog-link row m-3">
          <div class="col-12 col-md-4 p-0">
            <img :src="post.image ? `/images/blog/${post.slug}/${post.image}` : '/images/logo.png'"
              class="img-fluid rounded" :alt="post.title">
          </div>
          <div class="col-12 col-md-8 p-0 h-100">
            <div class="card-body py-0 h-100">
              <h5 class="card-title gradient-text mb-0">{{ post.title }}</h5>
              <p class="card-text text-truncate-ellipsis mb-0">{{ post.description }}</p>
              <p class="card-text"><small class="text-muted">{{ post.date }}</small></p>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { blogPosts } from '~/data/blogPosts.js'
import { useRoute } from 'vue-router'

const route = useRoute()
const currentSlug = route.params.slug
const latestPosts = []

blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date))
const currentIndex = blogPosts.findIndex(post => post.slug === currentSlug)

if (currentIndex === 0) {
  latestPosts.push(...blogPosts.slice(1, 4))
} else {
  latestPosts.push(...blogPosts.slice(0, 4))
}
</script>

<style>
.card-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.text-truncate-ellipsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

@media (min-width: 768px) {
  .card {
    height: 135px;
  }

  .card-body {
    max-height: 100%;
  }
}
</style>