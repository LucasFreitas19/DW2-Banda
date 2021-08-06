<template>    
        <section class="banner">
            <div class="banner_img">
                <img class="images" :class="{'active' : activeFoto1}"  src="../assets/imgback4.jpg" alt="foto back">
                <img  class="images" :class="{'active' : activeFoto2}" src="../assets/imgback5.jpg" alt="foto back">
            </div>
            <div class="container banner_content">
                <div class="row">
                    <div class="col-md-10">
                        <p class="intro_txt" :class="{'active' : activeTxt1}">Ao contrário d sua forma exata original, acompanhada das versões para o inglês da tradução feita por H. Rackham em 1914.</p>
                        <p class="intro_txt" :class="{'active' : activeTxt2}">dddddddddddddddddddddddddddddddddddddd</p>
                    </div>
                </div>
            </div>
        </section>
</template>
<script>

export default {
     name : "Banner",
     data : function(){
         return{
             activeFoto1 : true,
             activeFoto2 : false,   
             activeTxt1 : true,
             activeTxt2 : false      
             }
     },
     methods: {
         toMove : function(){
             this.activeFoto1 = !this.activeFoto1;
             this.activeFoto2 = !this.activeFoto2;
         },
         toMoveTxt : function(){
             this.activeTxt1 = !this.activeTxt1;
             this.activeTxt2 = !this.activeTxt2;
             }
     },
     created(){
         setInterval(() =>{
             this.toMove();
             this.toMoveTxt();
         }, 5000)
     }
}
</script>

<style>

.banner{
    width: 100%;
    height: 500px;
    background-color: #212121;
    position: relative;
    color: black;
    overflow: hidden;   
}
.banner_img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 500px;
}
.banner_img img{
    width: 100%;
}
.banner_content{
    position: relative;
    top: 40%;
    right: 20%;
}
.banner_content p{
    font-size: 25px;
    line-height: 25px;
    -webkit-text-stroke-width: 0.3px;
    -webkit-text-stroke-color:red ;
    left: 100px;
    position: relative;
}
.images{
    width: 100%;
    height: 500px;
    top: 0;
    position: absolute;
    opacity: 0;
    transition: opacity linear 3.0s;
}

.intro_txt{
    opacity: 0;
    transition: opacity linear 3.0s;
    }
.active{
    opacity: 1;
}
</style>
