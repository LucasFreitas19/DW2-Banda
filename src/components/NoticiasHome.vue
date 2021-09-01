<template>
  <section class="NoticiasHome">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h2 class="newstitle">Notícias</h2>
        </div>
      </div>
      <div class="row">
        <div
          v-for="myNew in newsFiltered"
          :key="myNew.id"
          :class="{
            'col-md-12': myNew.title === 'Noticia 01',
            'col-md-6': myNew.id !== 1,
          }"
        >
          <div class="newsbox">
            <img :src="myNew.img" />
            <h3>{{ myNew.title }}</h3>
            <p>{{ myNew.text }}</p>
            <router-link
              :to="{ name: 'noticias-detalhe', params: { id: myNew._id } }"
              ><span>Leia mais</span></router-link
            >
          </div>
        </div>
        <div class="col-md-12" v-if="isButton">
          <router-link to="/noticias" class="button_news"
            ><button>Veja mais</button></router-link
          >
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "NoticiasHome",
  props: {
    isButton: Boolean,
  },
  data: function () {
    return {
      news: [],
    };
  },
  computed: {
    newsFiltered: function () {
      const news = this.news;
      if (this.isButton) {
        return news.slice(0, 3);
      }
      return news;
    },
  },
  methods: {
    getNews: async function () {
      const result = await fetch("http://localhost:3000/noticias")
        .then((res) => res.json())
        .catch((error) => {
          return {
            error: true,
            message: error,
          };
        });
      if (!result.error) {
        this.news = result;
      }
    },
  },
  created: function () {
    this.getNews();
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
.NoticiasHome .col-md-12 img {
  max-width: 100%;
  width: 100%;
}
.newsbox {
  margin-bottom: 30px;
}
.NoticiasHome button {
  width: 170px;
  height: 40px;
  cursor: pointer;
  background: #c3121c;
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
