<template>
  <div class="box">
    <img :src="data.thumb" alt="" />
    <div class="box-inner">
      <div class="box-title">
        <div class="px-3" style="flex: 1">
          <h4>{{ data.title }}</h4>
          <span>{{ data.desc }}</span>
        </div>
        <div class="close">&#215;</div>
      </div>
      <div class="unit-price">
        <span class="price" :class="{ 'has-discount': data.discount }">${{ data.price }}</span>
        <span class="price" v-if="data.discount">${{ data.price * (1 - data.discount) }}</span>
      </div>
      <div class="counter-wrapper">
        <div class="counter">
          <span @click="decrease">-</span>
          <span class="num">{{ data.count }}</span>
          <span class="next" @click="increase">+</span>
        </div>
        <div class="d-flex flex-column justift-content-center align-items-center">
          <span class="title">subtotal</span>
          <span class="price">${{ data.totalprice }}</span>
        </div>
      </div>
      <div class="close">&#215;</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductItemBox",
  props: ["data"],
  data: () => ({}),
  methods: {
    increase() {
      this.data.count++;
      this.data.totalprice = this.data.count * this.data.price * (1 - this.data.discount);
    },
    decrease() {
      if (this.data.count > 1) this.data.count--;
      this.data.totalprice = this.data.count * this.data.price * (1 - this.data.discount);
    },
  },
};
</script>

<style scoped>
.box {
  display: flex;
  align-items: center;
  padding: 14px;
  margin-bottom: 10px;
  border-radius: 16px;
  box-shadow: 0 1px 6px 2px rgb(214, 214, 214);
  background: white;
  position: relative;
}

.box-inner {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.box img {
  height: 120px;
  width: 120px;
  min-width: 120px;
  border-radius: 16px;
  overflow: hidden;
}

.box h4 {
  font-size: 20px;
  color: #055452;
}

.box-title {
  display: flex;
  align-items: flex-start;
  width: 100%;
}

.unit-price {
  display: none;
}

.price {
  font-weight: 600;
  font-size: 20px;
  color: #055452;
}

.has-discount {
  color: #c6c6c6;
  text-decoration: line-through;
}

.counter-wrapper {
  display: flex;
  padding-left: 1rem;
  padding-right: 1rem;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
}

.counter {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 150px;
  height: 50px;
  border: 1px solid #c6c6c6;
  border-radius: 28px;
  box-shadow: inset 5px 2px 9px 4px #e0e0e0;
}

.counter span {
  font-size: 22px;
  font-weight: 600;
  cursor: pointer;
  text-align: center;
  width: 50px;
}

.counter .next {
  color: #055452;
}

.counter .num {
  color: #055452;
  cursor: default;
  width: 80px;
}

.num::after {
  content: "|";
  color: #dad9d9;
  margin-left: 20px;
}

.num::before {
  content: "|";
  color: #dad9d9;
  margin-right: 20px;
}

.title {
  color: #c6c6c6;
  text-transform: uppercase;
  font-size: 12px;
  display: none;
}

.close {
  display: none;
  right: 10px;
  top: 0;
  flex: auto;
  min-width: 50px;
  cursor: pointer;
  color: #d90f0f;
  font-size: 40px;
  padding: 0 10px;
  text-align: end;
}

.box-title .close {
  display: block;
  flex: 0 !important;
}

@media screen and (min-width: 1200px) {
  .box-inner {
    flex-direction: row;
    align-items: center;
  }

  .unit-price {
    display: flex;
    flex-direction: column;
  }

  .counter-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .counter {
    margin-right: 10%;
  }

  .close {
    display: block;
  }

  .title {
    display: block;
  }

  .box-title .close {
    display: none;
  }
}
</style>
