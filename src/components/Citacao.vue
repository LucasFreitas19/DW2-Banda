<template>
  <section class="citacao">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <p class="citacao__text">
            “Horas no estúdio e madrugadas acordado; Se eu não for o mais telentoso, eu vou ser o mais esforçado;
            Vocês chamam de ego, eu chamo de autoconfiança; Mas não confunda reciprocidade com vingança “
          </p>
          <p class="citacao__author">(Krawk, Wally)</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Citacao",
};
</script>
<style>
html, body {
margin: 0px;
padding: 0px;
font-family: sans-serif
}
.container {
width: 100%;
max-width: 960px;
height: 100%;
display: flex;
margin: auto;
flex-wrap: wrap;
}
.row {
display: flex;
flex-direction: row;
flex-wrap: wrap;
align-items: center;
flex: 1;
width: 100%;
}
.citacao {
background-color : rgb(12, 12,12);
width: 100%;
height: 255px;
}
.citacao .citacao__text {
color: #C3121C;
font-size : 24px;
font-style: italic;
}
.citacao .citacao__author {
color: #C3121C;
font-size : 16px;
text-align: right;
}



</style>
