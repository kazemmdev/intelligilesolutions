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
          <div class="col-auto g-0 d-flex align-items-center gap-3 text-dark text-decoration-none">
            <div class="d-flex gap-2" v-if="!ticket.closed">
              <div class="button gray" @close="ticket.closed=true">Close</div>
              <div class="button">Answer</div>
            </div>
          </div>
        </div>
      </div>
    </Portal>
    <div class="d-flex ticket-head">
      <div class="d-flex align-items-center gap-2">
        <img src="~/assets/svg/user.svg" alt="" width="15">
        <div class="d-block">
          <h4 class="mb-0">{{ ticket.user.name }}</h4>
          <span id="id">#{{ $route.params.id }}</span>
        </div>
      </div>
      <div class="ticket-head-info">
        <div class="d-flex"><span class="flex-1">Subject:</span>
          <span class="title flex-1">{{ ticket.subject }}</span>
        </div>
        <div class="d-flex"><span class="flex-1">Department:</span>
          <span class="title flex-1">{{ ticket.department }}</span>
        </div>
        <div class="d-flex"><span class="flex-1">Priority:</span>
          <span class="title flex-1">{{ ticket.priority }}</span>
        </div>
      </div>
      <div class="gap-2 d-lg-flex d-none" v-if="!ticket.closed">
        <div class="button gray" @close="ticket.closed=true">Close</div>
        <div class="button">Answer</div>
      </div>
    </div>
    <ticket-box :data="item" v-for="(item, index) in data" :key="index" :no-state="true"/>
  </div>
</template>

<script>
import TicketBox from "~/components/TicketBox";
export default {
  name: "index",
  components: {TicketBox},
  layout: "profile",
  data() {
    return {
      close: false,
      ticket: {
        closed: false,
        subject: 'Error cart',
        department: 'Sales Support',
        priority: 'High',
        user: {
          name: 'Jack Dorsi'
        }
      },
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

.button {
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

.button:hover {
  background-color: #e8926a
}

.gray {
  background-color: #a7afb7;
}

.gray:hover {
  background-color: #96999d;
}

.ticket-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 10px;
  margin-bottom: 5px;
}

.ticket-head img {
  background: #e5e5e5;
  height: 60px;
  width: 60px;
  min-width: 60px;
  border-radius: 50%;
  padding: 16px;
}

.ticket-head h4 {
  font-size: 20px;
}

.ticket-head #id {
  font-size: 14px;
  color: #aaa3a8;
}

.ticket-head-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: nowrap;
  padding-left: 10px;
  max-width: 220px;
  font-size: 15px;
}

.ticket-head-info span {
  color: #444;
}

.ticket-head-info .title {
  font-weight: 600;
}

.flex-1 {
  flex: 1;
}

@media screen and (max-width: 576px) {
  .ticket-head-info {
    flex: 1;
    max-width: none;
    width: 100%;
  }

  .ticket-head-info div {
    border: 1px solid #e1e1e1;
    border-radius: 6px;
    padding: 4px 8px;
    margin-bottom: 8px;
  }

  .ticket-head {
    align-items: start;
    gap: 16px;
    justify-content: center;
    flex-direction: column;
  }
}

</style>