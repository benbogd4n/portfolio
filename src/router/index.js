import { createRouter, createWebHistory } from "vue-router";

import Main from "../views/Main.vue"
import About from "../views/About.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/https---github.com-benbogd4n-vuePortfolio/',
            component: Main
        },
        {
            path: '/about',
            component: About
        }
    ]
})

export default router