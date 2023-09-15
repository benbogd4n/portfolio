<script>
export default {
    name: "MobileNav"
}
</script>

<template>
    <div class="backdrop">
        <div class="modal">
            <div class="nav-links">
                <ul class="main-nav"> 
                    <router-link to="/about"><li>About me</li></router-link>
                    <li><a href="#experience">Experience</a></li>                    
                    <li><a href="#projects">Projects</a></li>  
                </ul>
            </div>
            <div class="nav-links">
                <ul class="about-nav">
                    <router-link to="/"><li>Back to main</li></router-link>
                </ul>
            </div>
            <div class="nav-icons">
                <ul class="nav-buttons">
                    <li><a href="https://github.com/benbogd4n" target="_blank"><img src="../images/github-grey.png" alt="" title="Check out my GitHub account"></a></li>
                    <li><a href="https://www.linkedin.com/in/benbogdan/" target="_blank"><img src="../images/LinkedIn_logo_initials-bnw.png" alt="" title="Check out my LinkedIn account"></a></li>
                    <li><button><a href="mailto:ben.bogdan@icloud.com">Contact Me</a></button></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>

/* ==========================================================================
   Desktop Delete
   ========================================================================== */
.backdrop {
    display: none;
}


/* ==========================================================================
    Mobile Nav
    ========================================================================== */

@media (max-width: 87em) {
    .modal {
        width: 18rem;
        height: 12rem;
        padding: 2rem;
        margin: 2rem auto;
        background: var(--background-light);
        border-radius: 8px;
    }

    .nav-links {
        color: var(--hyperlink);
        font-weight: var(--bold);
        border: 1px solid red;
    }

    .nav-links ul{
        display: flex;
        gap: 2rem;
        justify-content: center;
    }

    .nav-buttons {
        display: flex;
        border: 1px solid red;
    }

    .backdrop {
        display: block;
        top: 0;
        position: fixed;
        background: rgba(0, 0, 0, 0.5);
        width: 100%;
        height: 100%;
    }

}

</style>