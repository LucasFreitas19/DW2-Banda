<template>
  <header class="header">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h1 class="Txt_Logo">
            <img class="Img_Logo" src="../assets/Logo-Header.png" alt="Wally" />
          </h1>
        </div>
        <div class="col-md-6 header_right">
          <p class="Txt_Menu">Mantendo meus pés no chão, minha marra em alta e minha fé em dia</p>
          <nav class="Menu">
            <ul>
              <li><router-link to="/">Home</router-link></li>
              <li>Biografia</li>
              <li><router-link to="/noticias">Noticias</router-link></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
.header {
  background-color: black;
  height: 80px;
  width: 100%;
  color: red;
}

.header_right{
display: flex;
flex-direction: column;
align-items: flex-end;
margin-top: -15px;
}


.Txt_Logo {
  width: 120px;
  padding: 0px;
  margin-top: 5px;
}

.Img_Logo {
  width: 100%;
}
.Menu ul li a{
    padding: 4px 15px;
    letter-spacing: 0.5px;
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    color:red ;
}
.Menu ul{
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: row;
  widows: 100%;
  align-items: center;
  margin: 0px;
}

.Menu ul li:not(:last-child):after{
content: "";
display: inline-block;
width: 2px;
background-color: #e2e2e2;
height: 10px;
margin-left: 10px;
}
.Menu ul li:hover {
background-color: rgb(43, 38, 38);
}
.Txt_Menu {
  font-size: 14px;
  font-style: italic;
  color:red;
  
}


</style>