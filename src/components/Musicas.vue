<template>
  <section class="musicas">
    <div>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2 class="discografia">Discografia</h2>
          </div>
        </div>
        <div class="row">
          <div v-for="faixa in faixas" :key="faixa.name" class="col-md-3">
            <div class="discografia__card">
              <img :src="faixa.img" :alt="faixa.name" />
              <h5 v-text="faixa.name"></h5>
              <p> {{faixa.ano}}</p>
              <a :href="faixa.link" target="_blank"> Ouvir </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Musicas",
  data: function () {
    return {
      faixas: [
        {
          name: "Wally",
          ano: "2021",
          img: require("../assets/Album.jpg"),
          link: "https://youtube.com/playlist?list=OLAK5uy_nodLTgDq2ilaX165cFNeqv33AxJpaDOeA",
        },
        {
          name: "Debochado",
          ano: "2019",
          img: require("../assets/Mixtape.jpg"),
          link: "https://youtube.com/playlist?list=PLUmC2ZUmTYuiu9IezDvphrQVpPTSDrLiv",
        },
        {
          name: "APP",
          ano: "2021",
          img: require("../assets/APP.jpg"),
          link: "https://www.youtube.com/watch?v=5JH_Dhcgzos",
        },
        {
          name: "Frio na Barriga",
          ano: "2021",
          img: require("../assets/FrioNaBarriga.jpg"),
          link: "https://www.youtube.com/watch?v=zcWB7_85weM",
        },
        {
          name: "Festinha",
          ano: "2021",
          img: require("../assets/Festinha.png"),
          link: "https://www.youtube.com/watch?v=3kUZDCs4nM8",
        },
        {
          name: "Online",
          ano: "2021",
          img: require("../assets/Online.jpg"),
          link: "https://www.youtube.com/watch?v=UPfCivVDDSU",
        },
        {
          name: "Ilicitos",
          ano: "2020",
          img: require("../assets/Ilicitos.jpg"),
          link: "https://www.youtube.com/watch?v=Or4bCIxslyQ",
        },
        {
            name: "Melhor Sozinho",
            ano: "2020",
            img: require("../assets/MelhorSozinho.jpg"),
            link: "https://www.youtube.com/watch?v=OEgd4iDxlA0",
        }
      ],
    };
  },
};
</script>
<style>
.musicas {
  padding: 40px 0;
  background-color: rgb(12, 12, 12);
  color: rgb(255, 255, 255);
}

.musicas h2 {
padding-bottom : 20px;
}
.discografia__card{
display: flex;
flex-direction : column;
justify-content: center;
align-items: center;
height: 340px;
}
.discografia__card img{
width: 100%;
max-width: 193px;
height: 193px;
}
.discografia__card a{
display: block;
width: 120px;
height : 30px;
background-color: #e2e2e2;
color: #212121;
text-align: center;
text-decoration : none;
line-height: 31px;
margin-top: 5px;
margin-bottom: 30px;
border-radius: 6px;
font-size: 14px;
font-weight: 900;
}
.discografia__card h5{
font-size: 16px;
text-align: center;
padding: 0px;
display: inline-block;
max-width : 120px;
margin: auto;
margin-bottom: 8px;

}

.discografia__card p{
    font-size: 13px;
    margin-top: 0;
    
}

</style>
