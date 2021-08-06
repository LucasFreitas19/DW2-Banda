<template>
<div> 
    <button @click="toShow"> Toggle </button>
    <div v-show="showTexto">
        Visa
    </div>
</div>
</template>

<script>


export default {
  name : "Example",
  data : function()
{    return{

    showTexto : false
    }
},
methods : {
 toShow : function(){
     this.showTexto = !this.showTexto
    }
}}
</script>

<style >

</style>