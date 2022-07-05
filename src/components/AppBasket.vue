<template>
  <span>Количество: {{ basketCount }}</span>
  <span>Сумма: {{ total }}</span>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  setup() {
    const store = new useStore()

    return {
      basketCount: computed(() => store.state.basketCount),
      total: computed(() => store.state.total)
    }
  }
}
</script>

<style scoped>
  span {
    margin-left: 10px;
  }
</style>