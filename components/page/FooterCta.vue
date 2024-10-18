<template>
  <div id="cta-box" class="d-flex justify-content-center align-items-center">
    <div class="text-overlay container">
      <h5 class="display-4">Bereit, dein Projekt zum <span class="gradient-text">Leben</span> zu erwecken?</h5>
      <h2 class="lead">
        Ob du eine beeindruckende Website oder eine innovative App benötigst, ich bin hier, um dir zu helfen! Lass
        uns <span class="gradient-text">gemeinsam</span> deine Ideen in die Realität umsetzen und die <span
          class="gradient-text">perfekte Lösung</span>
        finden.
      </h2>

      <button class="btn btn-primary mt-5" data-bs-toggle="modal" data-bs-target="#contactModal">
        Klicke hier, um loszulegen!
      </button>
    </div>

    <PageFooterCtaModal></PageFooterCtaModal>
  </div>
</template>

<style scoped>
#cta-box {
  background-image: url("/images/hexagon.png");
  background-size: cover;
  background-position: center;
  height: 50vh;
  position: relative;
  background-attachment: fixed;
}

.text-overlay {
  z-index: 1;
}

#cta-box::before {
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