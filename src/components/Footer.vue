<script>
export default {
    name: "Footer"
}
</script>

<template>
    <div class="footer-bar">
        <ul class="footer">
            <li><a href=""><img src="../images/github-grey.png" alt="" title="Check out my GitHub account"></a></li>
            <li><a href=""><img src="../images/LinkedIn_logo_initials-bnw.png" alt="" title="Check out my LinkedIn account"></a></li>
            <li><button>Contact Me</button></li>
        </ul>
    </div>
</template>

<style scoped>

.footer-bar {
    padding: 1rem 0 0 0;
    margin: 0;
    position: relative;
    width: 100vw;
    bottom: 0;
    display: flex;
    justify-content: center;
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
    transition: color 1s, border-color 1s, background-color 1s;
}

button:hover {
    background-color: var(--background-dark);
    color: var(--background-light);
}

</style>