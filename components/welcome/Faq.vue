<template>
  <div class="container">
    <div class="accordion" id="faqAccordion">
      <h3 class="gradient-text">FAQ</h3>
      <div class="accordion-item" v-for="(faq, index) in faqs" :key="index">
        <h2 class="accordion-header" :id="'heading' + index">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            :data-bs-target="'#collapse' + index" aria-expanded="false" :aria-controls="'collapse' + index">
            {{ faq.question }}
          </button>
        </h2>
        <div :id="'collapse' + index" class="accordion-collapse collapse" :aria-labelledby="'heading' + index"
          data-bs-parent="#faqAccordion">
          <div class="accordion-body">
            <p>{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const faqs = ref([
  {
    question: "Welche Technologien verwenden Sie für die Webentwicklung?",
    answer:
      "Ich arbeite hauptsächlich mit modernen Webtechnologien wie HTML5, CSS3, JavaScript (React, Angular, Vue.js) für das Frontend und Node.js oder PHP für das Backend.",
  },
  {
    question: "Entwickeln Sie sowohl iOS- als auch Android-Apps?",
    answer:
      "Ja, ich biete die Entwicklung von Cross-Plattform-Lösungen wie React Native und oder Ionic Vue an.",
  },
  {
    question: "Wie lange dauert die Entwicklung einer Website oder App?",
    answer:
      "Die Entwicklungszeit hängt stark von der Komplexität des Projekts ab. Eine einfache Website kann in 2-4 Wochen fertiggestellt werden, während eine maßgeschneiderte App mehrere Monate dauern kann.",
  },
  {
    question: "Bieten Sie auch Wartung und Support nach dem Projektabschluss an?",
    answer:
      "Ja, ich biete Wartungs- und Support-Dienstleistungen an, um sicherzustellen, dass Ihre Website oder App nach dem Launch weiterhin reibungslos funktioniert.",
  },
  {
    question: "Wie sieht der Entwicklungsprozess bei Ihnen aus?",
    answer:
      "Mein Prozess beginnt mit einer detaillierten Anforderungsanalyse, gefolgt von Planung, Design und Entwicklung. Ich arbeite eng mit meinen Kunden zusammen und biete regelmäßige Updates an.",
  },
  {
    question: "Kann ich eine bestehende Website oder App von Ihnen optimieren oder erweitern lassen?",
    answer:
      "Ja, ich kann Ihre bestehende Website oder App optimieren, erweitern oder modernisieren. Egal, ob es um Performance-Verbesserungen oder zusätzliche Features geht.",
  },
  {
    question: "Welche Kosten sind mit einem Projekt verbunden?",
    answer:
      "Die Kosten variieren je nach Umfang des Projekts. Nach einer ersten Besprechung erstelle ich ein individuelles Angebot, das auf den Anforderungen basiert.",
  },
  {
    question: "Wie werde ich während des Projekts auf dem Laufenden gehalten?",
    answer:
      "Ich halte Sie durch regelmäßige Status-Updates und Meetings auf dem Laufenden und besprechen den Fortschritt gemeinsam.",
  },
  {
    question: "Können Sie auch ein MVP (Minimum Viable Product) entwickeln?",
    answer:
      "Ja, ich habe viel Erfahrung in der Entwicklung von MVPs, insbesondere für Start-ups, die schnell auf den Markt wollen.",
  },
  {
    question: "Wie kann ich sicherstellen, dass meine Idee geschützt bleibt?",
    answer:
      "Ich unterzeichne gerne eine Verschwiegenheitserklärung (NDA), bevor wir mit dem Projekt starten. Ihre Daten und Ideen werden stets vertraulich behandelt.",
  },
])
</script>

<style scoped>
.accordion-button:not(.collapsed) {
  background-color: transparent;
  color: inherit;
  box-shadow: none;
}

.accordion-button:focus {
  outline: none;
  box-shadow: none;
}

.accordion-body p {
  margin: 0;
}
</style>