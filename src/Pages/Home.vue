<template>
  <div class="home">
    <Header />
    <Banner />
    <Musicas />
    <Citacao />
    <Agenda />
    <NoticiasHome/>
  </div>
</template>
<script>
import Header from "../components/Header.vue";
import Banner from "../components/Banner.vue";
import Musicas from "../components/Musicas.vue";
import Citacao from "../components/Citacao.vue";
import Agenda from "../components/Agenda.vue";
import NoticiasHome from "../components/NoticiasHome.vue";

export default {
  name: "Home",
  components: {
    Header,
    Banner,
    Musicas,
    Citacao,
    Agenda,
    NoticiasHome,
  },
};
</script>
<style>
</style>
