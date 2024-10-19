<template>
  <NuxtLayout name="default">
    <div id="blog-eintrag" class="container">
      <NuxtImg class="img-fluid mb-5 rounded-bottom" :src="image" v-if="image" />
      <ContentRenderer :value="post" :class="image ? 'pt-3' : 'pt-5'" />

      <small v-html="post.imgsource"></small>

      <BlogEntryLatestPosts class="py-5"></BlogEntryLatestPosts>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

console.log("test")
const post = await queryContent('blog')
  .where({ slug: route.params.slug })
  .findOne()

const image = post.image ? `/images/blog/${post.slug}/${post.image}` : ''


useSeoMeta({
  title: `${post.title} - NetteSoftware Blog`,
  meta: [
    { name: 'description', content: post.description },
    { property: 'og:title', content: post.title },
    { property: 'og:description', content: post.description },
    { property: 'og:url', content: post.url },
    { property: 'og:image', content: image },
    { property: 'og:type', content: 'article' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: post.title },
    { name: 'twitter:description', content: post.description },
    { name: 'twitter:image', content: image },
    { name: 'article:published_time', content: post.date },
    { name: 'article:author', content: 'Florian Lauterbach' }
  ]
})
</script>