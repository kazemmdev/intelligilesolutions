<template>
  <div class="px-4">
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
    <h3 class="pb-2">My Cart</h3>
    <div class="container g-0 mb-10 justify-content-center align-items-center">
      <div class="row flex flex-wrap gap-3 py-4">
        <bank-card bank="paypal" :number="card" :select="cardSelected==='paypal'" @click.native="cardSelected='paypal'"/>
        <bank-card bank="master" :number="card" :select="cardSelected==='master'" @click.native="cardSelected='master'"/>
        <bank-card/>
      </div>
    </div>
  </div>

</template>

<script>
import ProductScore from "~/components/ProductScore";
import SavedBox from "~/components/SavedBox";
import BankCard from "@/components/BankCard";

export default {
  name: "index",
  components: {BankCard, SavedBox, ProductScore},
  layout: "profile",
  data() {
    return {
      card: '1234-5678-9102-1112',
      cvv: "********",
      expMonth: "02/19",
      expYear: "2023",
      cardSelected: "paypal"
    }
  }
}
</script>

<style scoped>

</style>