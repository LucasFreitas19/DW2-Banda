<template>
  <div class="filtro">
    <input type="text" v-model="searchItem" />
    <ul>
      <li v-for="item in itensFiltered" :key="item">
        {{ item }}
      </li>
    </ul>
    
    <div class="Observador">
        <input type="text" v-model="nome">
        <p>{{message}}</p>
    </div>
  </div>
 
</template>

<script>
export default {
  name: "Example",
  data: function () {
    return {
      searchItem: "",
      itens: ["Brasil", "Japao", "EUA", "Australia", "China", "Reino Unido",
       "Azerbaijão","Butão","Coreia do Norte",
       "Djibuti","Eslovenia","Fiji","Finlandia","Noruega","Suecia","Gabão",
       "Hungria","Portugal","Gibraltar","Malta","Italia","Paraguai","Andorra",
       "França","Polonia","Alemanha","Luxemburgo","Lituania","Estonia","Russia","Turquia",
       "Ucrania","Mexico","Coração","Kosovo","Uruguai","Venezuela","Chile","Peru",
       "Macedonia","Montenegro","Thailandia","Singapura","Taiwan","Equador","Colombia","Panama",
       "Bolivia","Belgica","Holanda","Eslovaquia","Croacia","Bulgaria","Zambia","Africa do Sul",
       "Senegal","Ghana","Ruanda","Uganda","Kenya","Irlanda","Escocia","Dinamarca","Guam",
       "Nova Zelandia","Guiana","Canada","Laos","Vietna","Nicaragua","Sri Lanka","Indonesia",
       "Malasya","Bangladesh","Camboja","Georgia","Chipre","Coreia do Sul","Romenia","Israel",
       "Ira","Iraque","Palestina","Egito","Camaroes","Tunisia","Jordania","Arabia Saudita",
       "Armenia","Grecia","Bielo Russia"],
       nome: "",
       message: "",

    };
  },
  computed : {
      itensFiltered : function(){
          return this.itens.filter((itemArray) =>{
              return itemArray.toLowerCase().indexOf(this.searchItem.toLowerCase()) > -1
          })
      }
  },
  watch : {
      nome : function(){
          this.message = "Campo Alterao";
      }

  }
};
</script>

<style >

.Obsrvador{
    padding: 10px;
}
</style>