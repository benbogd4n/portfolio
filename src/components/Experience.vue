<script>
import { certificates } from "../json/certificates.json"

export default {
    name: "Experience",
    data() {
        return {
            certificates: certificates
        }
    }
}
</script>

<template>
    <div class="experiences" id="experiences">
        <div class="experience">
            <h3>Experience</h3>
            <p>During my studies I had to work on small website building projects using Wordpress. After this I was also approached by a friend to create a site for their work, which I enjoyed a lot using Wordpress, but felt limited. This started out my interest in coding and eventually, Web Development. I started out with learning Swift to get familiar with app building for iOS, which was followed by completing courses for HTML, CSS and Javascript. Since this I've been working on apps using Glide, which is a part time work I do for my school. I am currently completing the Codecademy Career Path of Front-End Engineer. Besides my experiences in working on my school projects and helping my friend, I have experience in video and photo editing and graphic design using Adobe software. 
            <br> I have completed a bigger Vue project assignment, while looking for new opportunities and that made me appreciate the framework and lead me to putting my focus in it. I am currently working on remaking my website using Vue and Sass.</p>
            <img src="../images/work-icon.png" alt="">
        </div>
        <div class="experience">
            <h3>Certificates</h3>
            <ul>
                <li v-for="certificate in certificates" :key="certificate.id" class="certificate">
                    <div class="certificate-logo">
                        <img :src="`/src/images/${certificate.logo}`" alt="Certificate logo">
                    </div>
                    <div class="certificate-name">
                        <a :href="certificate.link" target="_blank"><h3 :title="certificate.message">{{certificate.name}}</h3></a>
                    </div>
                </li>
            </ul>
            <img src="../images/cert-icon.png" alt="">
        </div>
        <div class="experience">
            <h3>Education</h3>
            <p>I am currently finishing my Bachelor of Science studies at the European School of Physiotherapy. In 2015 I started studying at the Budapest Business School but due to moving to the Netherlands I stopped my studies but I was able to lay down a good economical knowledge base. I am currently being self taught about Frontend development with having finished courses in Swift, HTML, CSS and Javascript. My education in this area is mainly based on Codecademy and Udemy courses which I started in late 2021. This website is currently my biggest finished project using HTML, CSS and JS.
            <br> I have also completed a skill assessment project for a traineeship which introduced to me the framework, Vue.js. After this assignment I completed courses to learn more about Vue.js and now I am learning Sass.</p>
            <img src="../images/study-icon.png" alt="">
        </div>
    </div>
</template>

<style scoped>
.experiences {
    background-color: var(--background-dark);
    box-shadow: 0px -3px 15px 70px rgb(49, 50, 50);
    margin-top: 5.2rem;
    padding: 1rem 0;
}

.experience {
    margin: 2rem auto 4rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    box-shadow: -20px 20px 18px 3px rgba(0, 0, 0, 0.2);
    width: 45%;
    text-align: justify;
    padding: 1rem 5rem;
}

.certificate {
    display: flex;
}

.certificate-logo {
    width: 3rem;
    margin-top: 0.5rem;
}

.certificate-name {
    margin-left: 2rem;
}

.certificate-name h3{
    transition: color 1s;    
    font-size: var(--large);
}

.certificate-name h3:hover {
    color: var(--linkhover);
}

.certificate-logo img {
    max-width: 3rem;
    max-height: 3rem;
}

</style>