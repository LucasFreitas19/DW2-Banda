<template>
  <div class="card">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
    <button>Detalhes</button>
  </div>
</template>
<script>
export default {
  name: "Card",
  props: {
    title: String,
    description: String,
  },
};
</script>
<style>
.card {
  background: #fafafa;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 30px;
  margin: 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.card h2 {
  font-size: 20px;
  font-weight: bold;
  color: #000000;
}
.card p {
  font-size: 15px;
  color: #000000;
}
.card button {
  width: 170px;
  height: 40px;

  border-radius: 6px;
  background-color: #c3121c;
  color: #ffffff;
  border: none;
}
</style>
