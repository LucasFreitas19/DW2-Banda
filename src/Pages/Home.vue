<template>
  <div class="home">
    <Header />
    <Banner />
    <Musicas />
    <Citacao />
    <Agenda />
  </div>
</template>
<script>
import Header from "../components/Header.vue";
import Banner from "../components/Banner.vue";
import Musicas from "../components/Musicas.vue";
import Citacao from "../components/Citacao.vue";
import Agenda from "../components/Agenda.vue";

export default {
  name: "Home",
  components: {
    Header,
    Banner,
    Musicas,
    Citacao,
    Agenda,
  },
};
</script>
<style></style>
