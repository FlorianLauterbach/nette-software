<template>
    <div>
        <NuxtLayout name="default">
            <WelcomeHero></WelcomeHero>

            <WelcomePitch class="area"></WelcomePitch>

            <WelcomeServices class="area"></WelcomeServices>

            <WelcomeTechnologies class="area"></WelcomeTechnologies>

            <WelcomeFaq class="area pb-5"></WelcomeFaq>
        </NuxtLayout>
    </div>
</template>

<script setup>
useSeoMeta({
    title: 'Web- und App-Entwicklung nach Maß - NetteSoftware',
    ogTitle: 'Web- und App-Entwicklung nach Maß - NetteSoftware',
    description: 'NetteSoftware bietet professionelle Web- und App-Entwicklung für individuelle Lösungen. Gemeinsam verwirklichen wir Ihre digitale Vision.',
    ogDescription: 'Maßgeschneiderte Web- und App-Entwicklung für Unternehmen und Privatpersonen. Mit NetteSoftware digitale Projekte erfolgreich umsetzen.',
    ogImage: 'https://nette-software.de/images/logo.png',
    twitterCard: 'summary_large_image',
})
</script>

<style scoped>
.area {
    margin-top: 10vh;
}
</style>