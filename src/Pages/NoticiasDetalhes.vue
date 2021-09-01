<template>
    <Header/>


</template>
<script>

import Header from "../components/Header.vue";


export default {
    components :{
        Header,
    },
    name: "NoticiasDetalhes",  
    data : function(){
        return{
            newDetail : {}
        }
    },
    methods : {
        getNewDetail : async function(){
            const result = await fetch('http://localhost:3000/noticias/' + this.$route.params.id)
            .then(res => res.json())
            .catch(error => {
                return{
                    error : true,
                    message : error
                }
            });

            if(!result.error){
                this.newDetail = result
            }
            
        }
    },
    created : function(){
        this.getNewDetail();
    }
}
</script>
<style>

</style>
