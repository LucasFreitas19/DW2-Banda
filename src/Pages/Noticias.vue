<template>
  <div class="noticias">
    <Header/>
    <Banner/>
  </div>
</template>

<script>
import Header from "../components/Header.vue"
import Banner from "../components/Banner.vue"

export default {
  name: "Noticias",

  components : {
      Header,
      Banner
  }
};
</script>
<style></style>
