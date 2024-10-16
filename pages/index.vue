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

</script>

<style scoped>
.area {
    margin-top: 10vh;
}
</style>