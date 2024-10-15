<template>
  <div id="services" class="container">
    <h3 class="gradient-text">Dienstleistungen</h3>
    <div class="row mt-5">
      <div class="col-12 col-sm-6 col-md-6 text-center my-3" v-for="entry in entries" :key="entry.title">
        <Icon :name="entry.icon" class="icon" />
        <h4 class="gradient-text">{{ entry.title }}</h4>
        <div class="text-start text-md-center mt-3">
          <p> {{ entry.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const entries = [
  {
    icon: 'material-symbols-light:responsive-layout-outline-rounded',
    title: 'Frontend',
    text: 'Erstellung von modernen, responsiven und benutzerfreundlichen Webseiten, die auf allen Geräten optimal funktionieren.'
  }, {
    icon: 'material-symbols-light:smartphone-outline',
    title: 'App',
    text: 'Entwicklung nativer oder plattformübergreifender Apps, die sowohl auf iOS als auch Android reibungslos laufen.'
  }, {
    icon: 'material-symbols-light:database-outline',
    title: 'Backend',
    text: 'Entwicklung und Implementierung leistungsstarker Backend-Systeme und APIs, die nahtlose Datenkommunikation und Skalierbarkeit ermöglichen.'
  }, {
    icon: 'material-symbols-light:contact-support-outline-rounded',
    title: 'Beratung',
    text: 'Beratung zur technischen Umsetzung von Projekten, Code-Optimierung und Leistungssteigerung bestehender Systeme.'
  }
]
</script>

<style scoped>
.icon {
  font-size: 3rem;
}
</style>