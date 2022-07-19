<template>
  <div class="box">
    <div class="d-flex align-items-center gap-3" v-if="state==='delivered'">
      <img id="tick" src="~/assets/svg/tick.svg" alt="">
      <h5 class="mb-0">Delivered</h5>
    </div>
    <div class="d-flex align-items-center gap-3" v-else>
      <img id="time" src="~/assets/svg/time.svg" alt="">
      <h5 class="mb-0">Pending</h5>
    </div>
    <div class="d-flex flex-wrap mt-4">
      <div class="box-info">
        Date: <span v-if="date">{{ date }}</span><span v-else>......</span>
      </div>
      <div class="box-info">
        Time: <span v-if="time">{{ time }}</span><span v-else>......</span>
      </div>
      <div class="box-info">
        Price: <span>${{ price }}</span>
      </div>
    </div>
    <div class="d-flex flex-wrap gap-3 mt-3">
      <div class="box-body" v-for="item in orders" :key="item.id">
        <img id="thumb" :src="item.thumb" alt="">
        <div>
          <p>{{ item.title }}</p>
          <p>${{ item.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderBox",
  props: {
    state: String,
    price: Number,
    date: {
      type: String,
      default: ""
    },
    time: {
      type: String,
      default: ""
    },
    orders: Array | Object
  }
}
</script>

<style scoped>
.box {
  padding: 20px;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.09);
  border: solid 1px #e0e0e2;
}

.box #time {
  background-color: #e99d7b;
  width: 28px;
  height: 28px;
  padding: 4px;
  border-radius: 50%;
}

.box #tick {
  background-color: #6bb927;
  width: 28px;
  height: 28px;
  padding: 4px;
  border-radius: 50%;
}

.box-info {
  font-size: 16px;
  color: #a1a2a1;
  margin-right: 30px;
  padding: 5px;
}

.box-info span {
  padding-left: 5px;
  color: #231942 !important;
}

.box-body {
  display: flex;
  min-width: 300px;
  flex: 1;
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
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 5px;
  color: #231942 !important;

}

</style>