<script>
import { projects } from "../json/projects.json"

export default {
    name: "Projects",
    data() {
        return {
            // currentSlide: 0,
            seeMore: true,
            projects: projects
        }
    },
    components: {
        
    },
    methods: {
        flipCard() {
            this.seeMore = !this.seeMore
        }
    }
}
</script>

<template>
    <div class="portfolio-container">
        <div class="projects">
            <div class="portfolio">
                <h3>Projects</h3>
            </div>
            <div class="project-collection">
                <div class="card" v-for="project in projects" :key="project.id" data-active>
                    <div class="card-inner">
                        <div class="card-face" v-if="seeMore">
                            <div class="front-image">
                                <img :src="`/src/images/${project.image}`" alt="" :title="project.title" class="project-picture">
                            </div>
                            <div class="front-action">
                                <div class="action-call">
                                    <p>See More</p>
                                </div>
                                <div class="card-info">
                                    <div class="card-header">
                                        <h3>{{project.title}}</h3>
                                    </div>
                                    <div class="card-type">
                                        <span>{{project.type}}</span>
                                    </div>
                                    <div class="card-body">
                                        <p>{{project.description}}</p>
                                    </div>
                                    <div class="card-link">
                                        <a :href="project.link" target="blank">Check it out!</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.portfolio-container {
    background-color: var(--background-dark);
    box-shadow: 0px -3px 15px 70px rgb(49, 50, 50);
    margin-top: 5.2rem;
    padding: 1rem 0;
}

.projects {
    margin: 2rem auto 4rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    box-shadow: -20px 20px 18px 3px rgba(0, 0, 0, 0.2);
    width: 60%;
    text-align: justify;
    padding: 1rem 2.5rem;
}

.project-collection {
    display: grid;
    gap: 2.5rem;
    grid-template-columns: repeat(2, 1fr);
    margin: 1rem 0 2rem 0;
}

.card {
    width: 400px;
    height: 280px;
}

.card-inner {
    width: 100%;
    height: 100%;
    position: relative;
}

.card-face {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0px 3px 18px 15px rgba(0, 0, 0, 0.2);
    margin: 0;
    padding: 0;
}

.front-image {
    height: 100%;
    width: 100%;
}

.project-picture {
    min-width: 100%;
    min-height: 100%;
}

.front-action {
    height: 35%;
    width: 100%;
    position: relative;
    z-index: 10;
    bottom: 4.9rem;
    transition: height 1s, bottom 1s, background-color 1s;
    transition-delay: 0.1s;
    background-color: rgba(0, 0, 0, 0.6);
}

.front-action:hover {
    height: 150%;
    bottom: 21rem;
    background-color: rgba(0, 0, 0, 0.85);
}

.action-call {
    padding-top: 0.3rem;
    text-align: center;
    color: var(--linkhover);
    font-size: var(--large);
    font-weight: var(--bold);
}

.card-header h3 {
    margin: 0;
    padding-top: 1rem;
}

.card-info p {
    margin: 1rem 0;
}

.card-info {
    text-align: center;
    padding: 0 1rem;
}

</style>