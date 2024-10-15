<template>
    <header>
        <nav id="navbar" class="navbar navbar-expand-lg fixed-top">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <img src="/images/logo.png" class="logo" alt="Nette Software">
                    NetteSoftware
                </a>
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
                                to="https://www.linkedin.com/in/florian-lauterbach/">
                                <Icon name="uil:github" class="icon" />
                            </NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink class="nav-link" aria-current="page" to="https://github.com/FlorianLauterbach">
                                <Icon name="uil:linkedin" class="icon" />
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>