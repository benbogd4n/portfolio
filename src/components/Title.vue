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
            <p>I am currently working on developing myself and my skills to become a valuable <span style="color: #646cff; font-weight: bold;">IT professional.</span></p>
        </div>
        <div class="title-about">
            <router-link to="/about"><button>More about me...</button></router-link>
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