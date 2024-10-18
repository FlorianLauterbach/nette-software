<template>
  <div id="technologies" class="container">
    <h3 class="gradient-text">Technologien</h3>
    <p>
      Von mir verwendete Techstacks. Ist Ihrer nicht dabei? Kein Problem - lassen Sie es mich wissen und wir finden
      eine Lösung.
    </p>
    <div class="row mt-5">
      <div class="d-flex justify-content-end">
        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn" v-for="type in types" :key="type.name" @click="selectType(type.name)"
            :class="type.name === selection ? 'btn-primary' : 'btn-outline-secondary'">
            {{ type.title }}
          </button>
        </div>
      </div>
      <transition-group name="slide" tag="div" class="row">
        <div class="col-6 col-md-3 text-center my-5" v-for="technology in technologies" :key="technology.title">
          <h5 class="gradient-text">{{ technology.title }}</h5>
          <WelcomeTechnologyImage :technology="technology"></WelcomeTechnologyImage>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const selection = ref('all')

const types = [
  {
    name: 'all',
    title: 'Alle'
  },
  {
    name: 'frontend',
    title: 'Frontend'
  },
  {
    name: 'backend',
    title: 'Backend'
  },
  {
    name: 'cms',
    title: 'CMS'
  },
  {
    name: 'cicd',
    title: 'CI/CD'
  },
  {
    name: 'docu',
    title: 'Dokumentation'
  }
]

const entries = [
  {
    title: 'AngularJS',
    type: 'frontend',
    text: ''
  },
  {
    title: 'Bootstrap',
    type: 'frontend',
    text: ''
  },
  {
    title: 'Directus',
    type: 'cms',
    text: ''
  },
  {
    title: 'Docusaurus',
    type: 'docu',
    text: ''
  },
  {
    title: 'ExtJS',
    type: 'frontend',
    text: ''
  },
  {
    title: 'Github Actions',
    type: 'cicd',
    text: ''
  },
  {
    title: 'Gitlab Actions',
    type: 'cicd',
    text: ''
  },
  {
    title: 'Ionic',
    type: 'frontend',
    text: ''
  },
  {
    title: 'Laravel',
    type: 'backend',
    text: ''
  },
  {
    title: 'NodeJS',
    type: 'backend',
    text: ''
  },
  {
    title: 'NuxtJS',
    type: 'backend',
    text: ''
  },
  {
    title: 'ReactJS',
    type: 'frontend',
    text: ''
  },
  {
    title: 'Storybook',
    type: 'docu',
    text: ''
  },
  {
    title: 'Storyblok',
    type: 'cms',
    text: ''
  },
  {
    title: 'Strapi',
    type: 'cms',
    text: ''
  },
  {
    title: 'Tailwind',
    type: 'frontend',
    text: ''
  },
  {
    title: 'ViteJS',
    type: 'frontend',
    text: ''
  },
  {
    title: 'VueJS',
    type: 'frontend',
    text: ''
  },
  {
    title: 'VuetifyJS',
    type: 'frontend',
    text: ''
  },
  {
    title: 'Wordpress',
    type: 'CMS',
    text: ''
  }
]

const selectType = function (type) {
  selection.value = type
}

const technologies = computed(() => {
  return selection.value == 'all' ? entries : entries.filter(tech => tech.type === selection.value)
})
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.4s ease;
}

.slide-enter-from,
.slide-leave-to {
  height: 0;
  margin: 0;
  padding: 0;
  opacity: 0;
  transform: translateY(0);
}

.slide-enter-to,
.slide-leave-from {
  height: auto;
  opacity: 1;
  transform: translateY(0);
}
</style>