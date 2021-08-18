<template>
  <section class="NoticiasHome">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h2 class="newstitle">Noticias</h2>
        </div>
      </div>
      <div class="row">
        <div
          v-for="myNew in news"
          :key="myNew.id"
          :class="{ 'col-md-12': myNew.id === 1, 'col-md-6': myNew.id !== 1 }"
        >
          <div class="newsbox">
            <img :src="myNew.img" alt="xx" />
            <h3>{{ myNew.title }}</h3>
            <p>{{ myNew.text }}</p>
            <router-link :to="{name: 'noticias-detalhe', params: {id: myNew.id}}"><span>Leia mais</span></router-link>
          </div>
        </div>
        <div class="col-md-12">
          <router-link to="/noticias" class="button_news"><button >Veja Mais</button></router-link
          >
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "NoticiasHome",
  data: function() {
    return {
      news: [
        {
          id: 1,
          title:
            "Los Grandes anuncia Krawk como influenciador e lança música Dollars",
          text: `A Los Grandes, uma das organizações mais tradicionais do cenário de Free Fire, anunciou Krawk como seu novo influenciador. O rapper é parte da nova geração do Rap e Trap nacional.
         A apresentação do jogador aconteceu nas redes sociais do time, que também aproveitou para lançar sua nova música, Dollars.
        Além de Krawk, o fundador da Los Grandes, El Gato, também deu voz a música, que ainda conta com as participações de Akuma, Dom M e Munizx.`,
          img: require("../assets/imgback4.jpg"),
        },
        {
          id: 2,
          title:
            "Krawk anuncia que está trabalhando em uma versão Deluxe de seu album",
          text: `A Los Grandes, uma das organizações mais tradicionais do cenário de Free Fire, anunciou Krawk como seu novo influenciador. O rapper é parte da nova geração do Rap e Trap nacional.
         A apresentação do jogador aconteceu nas redes sociais do time, que também aproveitou para lançar sua nova música, Dollars.
        Além de Krawk, o fundador da Los Grandes, El Gato, também deu voz a música, que ainda conta com as participações de Akuma, Dom M e Munizx.`,
          img: require("../assets/imgback1.png"),
        },
        {
          id: 3,
          title:
            "Los Grandes anuncia Krawk como influenciador e lança música Dollars",
          text: `A Los Grandes, uma das organizações mais tradicionais do cenário de Free Fire, anunciou Krawk como seu novo influenciador. O rapper é parte da nova geração do Rap e Trap nacional.
         A apresentação do jogador aconteceu nas redes sociais do time, que também aproveitou para lançar sua nova música, Dollars.
        Além de Krawk, o fundador da Los Grandes, El Gato, também deu voz a música, que ainda conta com as participações de Akuma, Dom M e Munizx.`,
          img: require("../assets/imgback1.png"),
        },
      ],
    };
  },
};
</script>
<style>
.NoticiasHome {
  background-color: rgb(12, 12, 12);
  color: rgb(255, 255, 255);
  padding: 56px 0;
}
.newstitle {
  font-size: 36px;
  color: rgb(255, 255, 255);
}

.NoticiasHome h3 {
  font-size: 26px;
}
.NoticiasHome p {
  font-size: 16px;
}
.NoticiasHome span {
  color: #c3121c;
  font-size: 14px;
}
.NoticiasHome img {
  max-width: 100%;
}
.newsbox {
  margin-bottom: 30px;
}
.NoticiasHome button {
  width: 170px;
   height: 40px;
   cursor: pointer;
   background: #C3121C;
   color: #212121;
   border-radius: 6px;
   border: none;
   font-weight: bold;
}
.button_news {
   display: block;
    text-align: center;
    margin: 30px auto;
    width: 170px;
    height: 40px;
}
</style>
