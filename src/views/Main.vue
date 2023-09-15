<script>
import Title from "../components/Title.vue"
import Experience from "../components/Experience.vue"
import Projects from "../components/Projects.vue"

export default {
    data() {
        return {
            showTitle: true,
            showExperience: false,
            showProjects: false
        }
    },
    name: "Main",
    components: {
        Title,
        Experience,
        Projects
    },
    methods: {
        toggleTitle() {
            this.showTitle = !this.showTitle
            if (this.showTitle) {
                this.showProjects = false
                this.showExperience = false
            }
        },
        toggleExperience() {
            this.showExperience = !this.showExperience
            if (this.showExperience) {
                this.showProjects = false
                this.showTitle = false
            }
            
        },
        toggleProjects() {
            this.showProjects = !this.showProjects
            if (this.showProjects) {
                this.showExperience = false
                this.showTitle = false
            }
        }
    }
}
</script>

<template>
<transition name="title">
<Title v-if="showTitle"/>
</transition>
<div class="buttons">
    <button @click="toggleExperience">Show me your experience</button>
    <button @click="toggleTitle" v-if="!showTitle">Take me home</button>
    <button @click="toggleProjects">Show me your projects</button>
</div>
<transition name="exp">
    <Experience v-if="showExperience"/>
</transition>
<transition name="proj">
    <Projects v-if="showProjects"/>
</transition>
</template>

<style scoped>

.buttons {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
}

.home-button {
    display: flex;
    justify-content: center;
}

.exp-enter-active,
.exp-leave-active,
.proj-enter-active,
.proj-leave-active,
.title-enter-active,
.title-leave-active  {
    transition: all 1.3s ease-in-out;
}

.exp-enter-from,
.exp-leave-to,
.proj-enter-from,
.proj-leave-to,
.title-enter-from,
.title-leave-to {
    opacity: 0;
}

</style>