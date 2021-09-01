<template>
  <section class="banner">
    <div class="banner_img">
      <img
        class="images"
        :class="{ active: activeFoto1 }"
        src="../assets/imgback5.jpg"
        alt="foto back"
      />
      <img
        class="images"
        :class="{ active: activeFoto2 }"
        src="../assets/imgback4.jpg"
        alt="foto back"
      />
    </div>
    <div class="container banner_content">
      <div class="row">
        <div class="col-md-10">
          <p class="intro_txt" :class="{ active: activeTxt1 }">
            Krawk, vem direto de São Paulo, Osasco e conquistou o Brasil nas
            batalhas de rima. Chegou em campeonatos nacionais e
            começou a focar em sua carreira musical
          </p>
          <p class="intro_txt p2" :class="{ active: activeTxt2 }">
            Em 2021, Krawk lançou seu primeiro albúm chamado de Wally,
            ultimamente ele entrou como embaixador da Los Grandes
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Banner",
  data: function () {
    return {
      activeFoto1: true,
      activeFoto2: false,
      activeTxt1: true,
      activeTxt2: false,
    };
  },
  methods: {
    toMove: function () {
      this.activeFoto1 = !this.activeFoto1;
      this.activeFoto2 = !this.activeFoto2;
    },
    toMoveTxt: function () {
      this.activeTxt1 = !this.activeTxt1;
      this.activeTxt2 = !this.activeTxt2;
    },
  },
  created() {
    setInterval(() => {
      this.toMove();
      this.toMoveTxt();
    }, 5000);
  },
};
</script>

<style>
.banner {
  width: 100%;
  height: 500px;
  background-color: #212121;
  position: relative;
  color: rgba(12, 9, 9, 0.815);
  overflow: hidden;
}
.banner_img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 500px;
}
.banner_img img {
  width: 100%;
}
.banner_content {
  position: relative;
  top: 40%;
   right: 8%;
}

.banner_content p {
  font-size: 30px;
  line-height: 24px;
  left: 80px;
  position: relative;
  text-shadow: 1px 1px red;
}

.p2 {
  margin-bottom: 140px;
  font: bold;
  font-size: 18px;
}
.images {
  width: 100%;
  height: 500px;
  top: 0;
  position: absolute;
  opacity: 0;
  transition: opacity linear 3s;
}

.intro_txt {
  opacity: 0;
  transition: opacity linear 3s;
  
}
.active {
  opacity: 1;
}

.banner_content .row{
  height: 700px;
}
</style>
