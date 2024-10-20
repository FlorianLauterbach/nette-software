<template>
    <header>
        <nav id="navbar" class="navbar navbar-expand-lg fixed-top">
            <div class="container">
                <NuxtLink class="navbar-brand" to="/">
                    <NuxtImg src="/images/logo.webp" class="logo" alt="Nette Software" />
                    NetteSoftware
                </NuxtLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <NuxtLink class="nav-link" aria-current="page" to="/">Startseite</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink class="nav-link" aria-current="page" to="/blog">Blog</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink class="nav-link" aria-current="page"
                                to="https://www.linkedin.com/in/florian-lauterbach/" aria-label="Linkedin Profil">
                                <Icon name="uil:linkedin" class="icon d-none d-md-block" />
                                <span class="d-md-none">Auf Linkedin folgen</span>
                            </NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink class="nav-link" aria-current="page" target="blank"
                                to="https://github.com/FlorianLauterbach" aria-label="Github Profil">
                                <Icon name="uil:github" class="icon d-none d-md-block" />
                                <span class="d-md-none">Auf GitHub folgen</span>
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>