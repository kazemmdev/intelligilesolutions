<template>
  <div class="py-md-4 px-4 px-md-5 mb-5 bord">
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
    <h3 class="pb-2">Supports</h3>
    <div class="d-flex gap-3 mb-4 flex-wrap">
      <Pagination :pages="6" :select="1"/>
      <div class="button-add" @click="show=true">Add new Ticket</div>
    </div>
    <TicketBox v-for="item in data" :key="item.id" :data="item"/>
    <NewTicketBox :open="show" @close="show=false"/>
  </div>
</template>

<script>
import Pagination from "@/components/Pagination";
import TicketBox from "@/components/TicketBox";
import NewTicketBox from "@/components/NewTicketBox";

export default {
  name: "index",
  components: {NewTicketBox, TicketBox, Pagination},
  layout: "profile",
  data() {
    return {
      show: false,
      data: [
        {
          id: "58/cart",
          state: 'open',
          priority: 'medium',
          time: 'September 30,2022 at 10:56 am',
          message: 'I have a very big problem with finalizing the purchase in the shopping cart, every time I reach this stage, unfortunately the purchase is payable.',
          user: {
            id: 1,
            avatar: '/images/avatar.jpg',
            name: 'Jack Dorsi'
          }
        },
        {
          id: "59/cart",
          state: 'pending',
          priority: 'medium',
          time: 'May 26,2022 at 18:50 pm',
          message: 'I have a very big problem with finalizing the purchase in the shopping cart, every time I reach this stage, unfortunately the purchase is payable.',
          user: {
            id: 1,
            avatar: '/images/avatar.jpg',
            name: 'Jack Dorsi'
          }
        },
        {
          id: "60/cart",
          state: 'closed',
          priority: 'low',
          time: 'June 21,2022 at 08:44 pm',
          message: 'I have a very big problem with finalizing the purchase in the shopping cart, every time I reach this stage, unfortunately the purchase is payable.',
          user: {
            id: 1,
            avatar: '/images/avatar.jpg',
            name: 'Jack Dorsi'
          }
        },
        {
          id: "61/cart",
          state: 'open',
          priority: 'high',
          time: 'June 18,2022 at 08:00 pm',
          message: 'I have a very big problem with finalizing the purchase in the shopping cart, every time I reach this stage, unfortunately the purchase is payable.',
          user: {
            id: 1,
            avatar: '/images/avatar.jpg',
            name: 'Jack Dorsi'
          }
        },
      ]
    }
  }
}
</script>

<style scoped>
.bord {
  border: none;
  border-radius: 16px;
}

@media screen and (min-width: 768px) {
  .bord {
    border: 1px solid #dee2e6;
  }
}

.button-add {
  display: flex;
  align-items: center;
  height: 40px;
  font-size: 14px;
  color: white;
  background-color: #e99d7b;
  border: none;
  border-radius: 6px;
  padding: 4px 20px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}

.button-add:hover {
  background-color: #e8926a
}
</style>