<template>
  <div class="card">
    <div class="card__info">
      <img class="card__img" src="https://mirm.ru/info/img_400/CNT75960.jpg.webp" alt="">
      <h3 class="card__title">Solar Guitars A2.7TBR</h3>
      <p class="card__desc">7-струнная электрогитара, цвет красный</p>
      <p class="card__price">72 990 р.</p>
    </div>
    <div class="card__buttons">
      <button>-</button>
      <button>+</button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .card {
    max-width: 200px;
    border: 1px solid rgba(0, 0, 0, 0.267);
    border-radius: 10px;
    padding: 20px;
    margin: 20px;
  }
  .card__img {
    max-width: 200px;
  }
  .card__price {
    text-align: right;
  }
  .card__buttons{
    display: flex;
    justify-content: space-between;
  }
</style>