<template>
  <div class="d-flex gap-3">
    <div class="pg" v-for="(item, index) in pages" :class="{'select':select===item}" :key="index">{{ item }}</div>
    <div class="pg">
      <i class="bi bi-chevron-right"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ['pages', 'select']
}
</script>

<style scoped>
.pg {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: black;
  background-color: #f1f1f1;
  border-radius: 8px;
  cursor: pointer;
}

.pg.select {
  color: white !important;
  background-color: #055452 !important;
}
</style>