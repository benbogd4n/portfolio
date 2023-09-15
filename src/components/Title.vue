<script>
export default {
    name: "Title"
}
</script>

<template>
<div class="title-view">
    <div class="title-text">
        <div class="title-name">
            <h2>BENJAMIN</h2>
            <h1>BOGDAN</h1>
        </div>
        <div class="title-description">
            <p>I am working on becoming a Frontend Developer using 
                <span style="color: rgb(252, 61, 61); font-weight: bold;">HTML</span>, 
                <span style="color: rgb(0, 129, 215); font-weight: bold;">CSS</span>, 
                <span style="color: rgb(236, 153, 1); font-weight: bold;">JavaScript</span> and 
                <span style="color: rgb(6, 175, 29); font-weight: bold;">Vue.js</span> with additional experience in editing and design using Adobe Suite.
            </p>
        </div>
        <div class="title-about">
            <router-link to="/about"><button>Tell me more about yourself...</button></router-link>
        </div>
    </div>
    <div class="title-image">
        <img src="../images/linkedin-pfp-2.png" alt="Image">
    </div>
</div>
</template>

<style scoped>

.title-view {
    display: flex;
    padding: 6rem 10rem;
    line-height: 0.8;
    justify-content: center;
}

.title-description {
    padding-left: 0.6rem;
    line-height: 1.5;
}

.title-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 40rem;
}

.title-about {
    display: flex;
    justify-content: start;
}

button {
    padding-left: 0.6rem;
}

img {
    max-width: 23rem;
    max-height: 23rem;
}

p {
  color: var(--text-secondary);
}


/* ==========================================================================
    Mobile Styles
    ========================================================================== */


</style>