<script>
export default {
    name: "Nav"
}
</script>

<template>
<div class="nav-bar">
    <ul>
        <li><a href="https://github.com/benbogd4n" target="_blank"><img src="../images/github-grey.png" alt="" title="Check out my GitHub account"></a></li>
        <li><a href="https://www.linkedin.com/in/benbogdan/" target="_blank"><img src="../images/LinkedIn_logo_initials-bnw.png" alt="" title="Check out my LinkedIn account"></a></li>
        <li><button><a href="mailto:bbogdan.public@gmail.com">Contact Me</a></button></li>
    </ul>
</div>

<div class="mobile-nav-wrapper">
    <nav class="main-nav" id="primary-navigation">
        <ul role="list" class="nav-list">
            <li><a href="#aboutme">About Me</a></li>                    
            <li><a href="#experience">Experience</a></li>                    
            <li><a href="#portfolio">Portfolio</a></li>                    
        </ul>
    </nav>
    <div class="top-logo">
        <a class="f-name" href="index.html">BENJAMIN</a>
        <a class="s-name" href="index.html">BOGDAN</a>
    </div>
    <div class="main-buttons">
        <div class="primary-buttons">
            <ul class="top-buttons">
                <li><a href="https://github.com/benbogd4n" target="_blank"><img src="../images/github-grey.png" alt="github link" class="github"></a></li>
                <li><a href="https://www.linkedin.com/in/benbogdan/" target="_blank"><img src="../images/LinkedIn_logo_initials-bnw.png" class="linkedin" alt="linked in logo"></a></li>
                <li><button class="button"><a href="mailto:bbogdan.public@gmail.com">Contact Me</a></button></li>
            </ul>
        </div>
    </div>
    <!-- <button class="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded="false">
        <img class="icon-hamburger" src="../images/icon-hamburger.svg" alt="" aria-hidden="true">
        <span class="visually-hidden">Menu</span>
    </button> -->
</div>
</template>

<style scoped>
.nav-bar {
    margin: 0;
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 2rem 4rem;
    position: relative;
    top: 0;
}

.mobile-nav-wrapper {
    display: none;
}

img {
    max-width: 2.1rem;
}

ul {
    margin: 0;
    padding: 0;
    display: flex;
    gap: 1rem;
}

button {
    background-color: var(--tertiary-dark);
    transition: border-color 1s, background-color 1s;
}

button:hover {
    background-color: var(--background-dark);
}


button a {
    color: var(--tertiary-light);
}

button a:hover {
    color: var(--background-light);
}

/* ==========================================================================
    Mobile Styles
    ========================================================================== */

@media (max-width: 87em) {
    .nav-bar {
        display: none;
    }
}
</style>