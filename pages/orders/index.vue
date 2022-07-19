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
          <a href="#" class="col-auto g-0 d-flex align-items-center gap-3 text-dark text-decoration-none">
            <img src="~/assets/svg/sort.svg" alt="">
            <span>Sort</span>
          </a>
        </div>
      </div>
    </Portal>

    <!--  Title selectors  -->
    <div class="d-flex gap-4 mb-2">
      <h3 class="order" :class="{'selected':state==='delivered'}" @click="state='delivered'">Delivered</h3>
      <h3 class="order" :class="{'selected':state==='pending'}" @click="state='pending'">Pending</h3>
    </div>

    <div class="container g-0 mb-10">
      <!--  Delivered Items -->
      <div class="row row-cols-1 gap-3" v-if="state==='delivered'">
        <OrderBox state="delivered" :price="500" date="September 30, 2022" time="10:51 am" :orders="data"/>
        <OrderBox state="delivered" :price="900" date="December 30, 2021" time="11:51 pm" :orders="data"/>
      </div>
      <div class="row row-cols-1 gap-3" v-if="state==='pending'">
        <!--  Pending orders  -->
        <OrderBox :price="300" :orders="data"/>
      </div>
    </div>
  </div>
</template>

<script>
import OrderBox from "@/components/OrderBox";

export default {
  name: "index",
  components: {OrderBox},
  layout: "profile",
  data() {
    return {
      state: 'delivered',
      data: [
        {id: 1, thumb: "/images/img1.jpg", title: "Sella body butter", price: 250},
        {id: 2, thumb: "/images/img1.jpg", title: "Sella body butter", price: 450},
        {id: 3, thumb: "/images/img1.jpg", title: "Sella body butter", price: 350},
      ]
    }
  }
}
</script>

<style scoped>
.order {
  cursor: pointer;
  padding-bottom: 8px;
}

.selected {
  color: #e99d7b;
  border-bottom: 3px solid #e99d7b;
}
</style>