import Home from "./Pages/Home.vue";
import VueRouter from "vue-router";
import Noticias from "./Pages/Noticias.vue";
import NoticiasDetalhes from "./Pages/NoticiasDetalhes.vue";

const routes = [
    {path: "/", component: Home, name: 'home'},
    { path: "/noticias", component: Noticias, name: 'noticias'},
    {path: "/noticias/:id", component: NoticiasDetalhes, name: 'noticias-detalhe'}
    
    ];
    const router = new VueRouter({
    routes ,
    mode: 'history'
    })
    export default router