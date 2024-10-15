<template>
    <div id="app-layout">

        <PageNavBar></PageNavBar>

        <main>
            <slot />
        </main>

        <PageFooterBar></PageFooterBar>
    </div>
</template>

<script setup>
</script>

<style type="scss">
main {
    margin-top: 61px;
}
</style>