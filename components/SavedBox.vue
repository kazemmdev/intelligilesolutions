<template>
  <div class="col col-xl-6 g-3">
    <div class="border box">
      <div class="box-body">
        <img id="thumb" :src="thumb" alt="">
        <div>
          <h5>{{ title }}</h5>
          <p>${{ price }}</p>
          <product-score :score="score"/>
        </div>
      </div>
      <div class="box-buttons">
        <button class="button-add">Add To Cart</button>
        <button class="button-remove">
          <img src="~/assets/svg/trash.svg" width="12" alt="">
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ProductScore from "~/components/ProductScore";

export default {
  name: "SavedBox",
  components: {ProductScore},
  props: ['thumb', 'title', 'price', 'score'],
}
</script>

<style scoped>
.box {
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.09);
}

.box-body {
  display: flex;
  width: 100%;
  padding-bottom: 10px;
}

.box-body #thumb {
  width: 100px;
  object-fit: contain;
  margin-right: 8px;
  border-radius: 8px;
  overflow: hidden;
}

.box-body p {
  font-size: 20px;
  margin-bottom: 5px;
}

.box-buttons {
  display: flex;
  gap: 4px;
  width: 100%;
}

.button-add {
  flex: 2;
  font-size: 14px;
  color: #364958;
  background-color: #e99d7b;
  border: none;
  border-radius: 6px;
  padding: 4px 20px;
  transition: all 0.3s ease-in-out;
}

.button-add:hover {
  background-color: #e8926a
}

.button-remove {
  flex: 1;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  color: #d64553;
  background-color: white;
  border: solid 1px #c6c6c6;
  border-radius: 6px;
  padding: 4px 20px;
  transition: all 0.3s ease-in-out;
}

.button-remove:hover {
  background-color: #eeeeee;
}

@media (min-width: 576px) {
  .box {
    flex-direction: row;
  }

  .box-body {
    padding-bottom: 0;
  }

  .box-buttons {
    flex-direction: column;
    width: 40%;
  }
}

</style>