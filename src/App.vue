<template>
  <div>
    <header class="header">
      <app-basket></app-basket>
    </header>
    <div class="container">
      <h1 class="title">Товары</h1>
      <div class="cards">
        <app-card v-for="card in $store.state.cards" :key="card.id" :card="card"></app-card>
      </div>
    </div>
  </div>
</template>

<script>
import AppCard from './components/AppCard.vue'
import AppBasket from './components/AppBasket.vue'

export default {
  components: {
    AppCard,
    AppBasket
  }
}
</script>

<style>
  .header {
    background-color: rgb(223, 223, 223);
    width: 100%;
    padding: 10px;
    margin-bottom: 50px;
    display: flex;
    align-items: center;
    justify-content: end;
    box-sizing: border-box;
  }
  .container{
    width: 1000px;
    margin: 0 auto;
  }
  .title {
    text-align: center;
  }
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>
