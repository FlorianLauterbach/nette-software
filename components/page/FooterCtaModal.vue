<template>
  <div class="modal fade" id="contactModal" tabindex="-1" aria-labelledby="contactModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="contactModalLabel">Kontaktformular</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div v-if="state != null" class="alert" :class="state ? 'alert-success' : 'alert-danger'">
            {{ message }}
          </div>
          <div>
            <p>
              Ich freue mich darauf, von Ihnen zu hören! Ob Sie Fragen haben, ein individuelles Angebot benötigen oder
              eine Idee besprechen möchten – lassen Sie mich wissen, wie ich Ihnen weiterhelfen kann. Füllen Sie einfach
              das untenstehende Formular aus, und ich melde mich schnellstmöglich bei Ihnen.
            </p>
          </div>
          <form @submit.prevent="submitForm">
            <div class="mb-3">
              <label for="name" class="form-label">Name</label>
              <input type="text" class="form-control" id="name" v-model="form.name" required />
            </div>
            <div class="mb-3">
              <label for="phone" class="form-label">Telefonnummer</label>
              <input type="tel" class="form-control" id="phone" v-model="form.phone" required />
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">Nachricht</label>
              <textarea class="form-control" id="message" v-model="form.message" required rows="8"></textarea>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                Schließen
              </button>
              <button type="submit" class="btn btn-primary" :disabled="loading">{{ buttonText }}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const loading = ref(false)
const state = ref(null)

const form = ref({
  name: '',
  phone: '',
  message: ''
})

const message = computed(() => {
  return state.value ? 'Anfrage erfolgreich versendet.' : 'Fehler beim Absenden der Nachricht'
})

const buttonText = computed(() => {
  return loading.value ? 'Lädt ..' : 'Absenden'
})

const submitForm = async () => {
  loading.value = true
  state.value = null

  try {
    const response = await fetch('/api/contact-form-submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form.value),
    })

    if (response.ok) {
      form.value = { name: '', phone: '', message: '' }
      state.value = true
    } else {
      state.value = false
    }
    loading.value = false
  } catch (error) {
    state.value = true
    loading.value = false
  }
}

</script>

<style scoped></style>