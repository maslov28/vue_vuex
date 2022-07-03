<template>
  <div>
    <header class="header"></header>
    <div class="container">
      <h1 class="title">Товары</h1>
      <div class="cards">
        <app-card v-for="card in cards" :key="card.id"></app-card>
      </div>
    </div>
  </div>
</template>

<script>
import AppCard from './components/AppCard.vue'
import {reactive} from 'vue'
export default {
  components: {
    AppCard
  },
  setup() {
    const cards = reactive([
      {
        id: 1,
        name: 'Solar Guitars A2.7TBR',
        price: 72990,
        description: '7-струнная электрогитара, цвет красный',
        img: 'https://mirm.ru/info/img_400/CNT75960.jpg.webp'
      },
      {
        id: 2,
        name: '',
        price: 100,
        description: '',
        img: ''
      },
      {
        id: 3,
        name: '',
        price: 100,
        description: '',
        img: ''
      },
      {
        id: 4,
        name: '',
        price: 100,
        description: '',
        img: ''
      },
      {
        id: 5,
        name: '',
        price: 100,
        description: '',
        img: ''
      },
    ])

    return {
      cards
    }
  }
}
</script>

<style>
  .header {
    background-color: rgb(223, 223, 223);
    width: 100%;
    height: 50px;
    margin-bottom: 50px;
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
