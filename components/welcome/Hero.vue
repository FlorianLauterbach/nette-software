<template>
  <section class="hero-box d-flex justify-content-center align-items-center">
    <div class="text-overlay text-center">
      <h1 class="display-4"><span class="gradient-text">NetteSoftware</span></h1>
      <h2 class="lead">
        Programmierer für maßgeschneiderte Webseiten und mobile Apps aus
        <span class="gradient-text">Nettetal</span>
      </h2>
    </div>
  </section>
</template>

<style scoped>
.hero-box {
  background-image: url("/images/hexagon.webp");
  background-size: cover;
  background-position: center;
  height: 25vh;
  position: relative;
  background-attachment: fixed;
}

@media (min-width: 768px) {
  .hero-box {
    height: 50vh;
  }
}

.text-overlay {
  z-index: 1;
}

.hero-box::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.75);
  z-index: 0;
}
</style>