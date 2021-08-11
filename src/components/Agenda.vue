<template>
<section class="agenda">
<div class="container">
<div class="row">
<div v-for="event in events" :key="event.id" class="col-md-4">
<div class="card">
<h2>{{event.title}}</h2>
<p>{{event.text}}</p>
<button>Detalhes</button>
</div>
</div>
</div>
</div>
</section>
</template>
<script>
export default {
name: "Agenda",
data : function(){
return {
events : [
{
id: 1,
title : "Show 30 anos",
description : `Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum has been the industry's standard
dummy text ever since the 1500s, when an unknown printer took a galley
of type and scrambled it to make a type specimen book.`
},
{
id: 2,
title : "Show 30 anos",
description : `Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum has been the industry's standard
dummy text ever since the 1500s, when an unknown printer took a galley
of type and scrambled it to make a type specimen book.`
},
{
id: 3,
title : "Show 30 anos",
description : `Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum has been the industry's standard
dummy text ever since the 1500s, when an unknown printer took a galley
of type and scrambled it to make a type specimen book.`
},
{
id: 4,
title : "Show 30 anos",
description : `Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum has been the industry's standard
dummy text ever since the 1500s, when an unknown printer took a galley
of type and scrambled it to make a type specimen book.`
},
{
id: 5,
title : "Show 30 anos",
description : `Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum has been the industry's standard
dummy text ever since the 1500s, when an unknown printer took a galley
of type and scrambled it to make a type specimen book.`
},
{
id: 6,
title : "Show 30 anos",
description : `Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum has been the industry's standard
dummy text ever since the 1500s, when an unknown printer took a galley
of type and scrambled it to make a type specimen book.`
},
]
}
}
}
</script>
<style>
</style>