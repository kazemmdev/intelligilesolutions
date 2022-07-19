<template>
  <div class="d-flex align-items-center gap-1">
    <img src="~/assets/svg/star-fill.svg" alt="" width="18" v-for="(item, i) in score" :key="i">
    <img src="~/assets/svg/star.svg" alt="" width="18" v-for="(item, j) in 5-score" :key="j+5">
  </div>
</template>

<script>
export default {
  name: "ProductScore",
  props: ['score']
}
</script>

<style scoped>

</style>