import Home from "./Pages/Home.vue";
import VueRouter from "vue-router";
import Noticias from "./Pages/Noticias.vue"

const routes = [
    {
    path: "/", component: Home,
    },
    {
        path: "/noticias", component: Noticias
    }
    ];
    const router = new VueRouter({
    routes ,
    mode: 'history'
    })
    export default router