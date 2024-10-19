<template>
    <PageFooterCta class="mt-5"></PageFooterCta>

    <footer>
        <div class="container">
            <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 mt-5">
                <div class="col mb-3 text-center">
                    <NuxtLink to="/" class="d-flex align-items-center mb-3 text-decoration-none">
                        <NuxtImg src="/images/logo.webp" class="logo" alt="Nette Software" />
                    </NuxtLink>
                </div>

                <div class="col mb-3">

                </div>

                <div class="col mb-3">

                </div>

                <div class="col mb-3">

                </div>

                <div class="col mb-3">
                    <p class="h5 gradient-text">Rechtliches</p>
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2">
                            <NuxtLink to="/impressum" class="nav-link p-0 text-muted">Impressum</NuxtLink>
                        </li>
                        <li class="nav-item mb-2">
                            <NuxtLink to="/datenschutz" class="nav-link p-0 text-muted">Datenschutz</NuxtLink>
                        </li>
                    </ul>
                </div>
            </footer>
            <div class="row text-center">
                <p class="text-gradient">© 2024 NetteSoftware</p>
            </div>
        </div>
    </footer>
</template>

<style scoped></style>