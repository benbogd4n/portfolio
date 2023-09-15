<script>
export default {
    name: "About"
}
</script>

<template>
<div class="about-view">
    <div class="about">
        <div class="about-image">
            <img src="../images/linkedin-pfp-2.png" alt="Image">
        </div>
        <div class="about-details-container">
            <div class="about-details">
                <h3>Little bit about me</h3>
                <div class="about-text">
                    <p>I am currently finishing my Bachelor of Science studies at the European School of Physiotherapy. 
                    Besides my studies, I am currently working as a Student Assistant, where I am mainly responsible for the development of apps (<span style="font-weight: bold;">Glide app</span>) to help students during their courses. Additionally, I also do editing instructional videos for our online teaching platform. 
                    In my free time I am focusing on self improvement in IT as a web developer (currently learning <span style="font-weight: bold;">Vue.js</span>) and skills like graphic design & video/photo editing (<span style="font-weight: bold;">Adobe Suite</span>). 
                    Previously, I have worked in hospitality for 8 years, including the position of Supervisor. 
                    Throughout these years I was able to develop my skills when it comes to leading and both working as part of a team or handle problems as an individual.</p>
                </div>
                <div class="skills">
                    <img src="../images/html-logo.png" class="skill-logos" alt="html logo" title="HTML">
                    <img src="../images/css-logo.png" class="skill-logos" alt="css logo" title="CSS">
                    <img src="../images/js-logo.png" class="skill-logos" alt="javascript logo" title="JavaScript">
                    <img src="../images/Vue.js_Logo_2.svg.png" class="skill-logos" alt="vue logo" title="Vue.js">
                    <img src="../images/photoshop-logo.png" class="skill-logos" alt="photoshop logo" title="Photoshop">
                    <img src="../images/illustrator-logo.png" class="skill-logos" alt="illustrator logo" title="Illustrator">
                    <img src="../images/premiere-logo.png" class="skill-logos" alt="premiere-pro logo" title="Premiere Pro">
                </div>
                <router-link to="/"><button>Take me home</button></router-link>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>

.about-image {
    margin: 0 auto;
    width: 11rem;
    height: 11rem;
}

.about-image img {
    min-width: 100%;
    min-height: 100%;
}

.about-details-container {
    background-color: var(--background-dark);
    min-height: 40rem;
}

.about-details {
    margin: 1rem auto;
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    box-shadow: -20px 20px 18px 3px rgba(0, 0, 0, 0.2);
    width: 50%;
}

.about-text {
    text-align: justify;
    padding: 0 3rem;
}

.skills {
    margin: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
}

.skills img {
    max-width: 2rem;
}

button {
    margin: 1rem;
    background-color: var(--background-dark);
    transition: color 1s, border-color 1s, background-color 1s;
}

button:hover {
    color: var(--background-light);
}
</style>