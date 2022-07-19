<template>
  <div class="px-4 px-sm-0">
    <Portal to="under-header">
      <div class="container-full d-lg-none py-2 subNavPage px-4">
        <div class="row w-100 justify-content-between g-0">
          <nuxt-link class="col d-flex align-items-center gap-3 text-dark text-decoration-none" to="/profile">
            <img src="~/assets/svg/angle-small-right.svg" alt="">
            <span>Back</span>
          </nuxt-link>
          <!--  Actions are here  -->
          <div class="col-auto g-0"></div>
        </div>
      </div>
    </Portal>
    <h3 class="pb-2">My Saved</h3>
    <div class="container g-0 mb-10">
      <div class="row row-cols-1 row-xl-cols-2">
        <SavedBox v-for="item in data" :key="item.id" :title="item.title" :thumb="item.thumb" :price="item.price" :score="item.score"/>
      </div>
    </div>
  </div>

</template>

<script>
import ProductScore from "~/components/ProductScore";
import SavedBox from "~/components/SavedBox";

export default {
  name: "index",
  components: {SavedBox, ProductScore},
  layout: "profile",
  data() {
    return {
      data: [
        {id: 1, thumb: "/images/img1.jpg", title: "Sella body butter", score: 3, price: 350},
        {id: 2, thumb: "/images/img1.jpg", title: "Sella body butter", score: 3, price: 350},
        {id: 3, thumb: "/images/img1.jpg", title: "Sella body butter", score: 2, price: 350},
        {id: 4, thumb: "/images/img1.jpg", title: "Sella body butter", score: 1, price: 350},
        {id: 5, thumb: "/images/img1.jpg", title: "Sella body butter", score: 4, price: 350},
      ]
    }
  }
}
</script>

<style scoped>

</style>