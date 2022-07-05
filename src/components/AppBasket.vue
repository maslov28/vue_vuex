<template>
  <span>Количество: {{ $store.state.basketCount }}</span>
  <span>Сумма: {{ $store.state.total }}</span>
</template>

<script>
export default {

}
</script>

<style scoped>
  span {
    margin-left: 10px;
  }
</style>