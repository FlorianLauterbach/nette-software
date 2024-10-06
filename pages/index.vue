<template>
    <div>
        <NuxtLayout name="default">
            <h2>Welcome to the Home Page</h2>
            <!-- Platzhalter-Komponente einbinden -->
            <Placeholder />
        </NuxtLayout>
    </div>
</template>

<script setup>
import Placeholder from '~/components/Placeholder.vue'

</script>

<style scoped>
h2 {
    color: #007bff;
}
</style>