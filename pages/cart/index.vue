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
    <div class="container g-0 mb-10 justify-content-center align-items-center">
        <div class="d-flex justify-content-between align-items-center">
          <h1>{{ title }}</h1>
          <span class="link h4">{{ items.length }} Items</span>
        </div>
        <div class="mt-2 mb-4">
          <ProductItemBox v-for="item in items" :key="item.id" :data="item" />
        </div>
        <div class="d-flex justify-content-end mb-4">
          <div class="btn">
            <span>Update cart</span>
            <img src="~/assets/svg/refresh.svg" alt="" />
          </div>
        </div>
        <div class="free-shipping">
          <div>
            <h2>Free delivery</h2>
            <p>Purchases over $100 will be sent for free</p>
          </div>
          <img src="~/assets/pictures/Free-shipping.png" alt="" />
        </div>
        <div class="d-flex gap-lg-5 my-5 flex-column flex-lg-row">
          <div class="w-100">
            <div class="v-input">
              <label for="address">Your Address</label>
              <input type="text" id="address" v-model="address" placeholder="Please enter your adress here..." />
            </div>
            <div class="v-input">
              <label for="phone">Phone Num</label>
              <input type="text" id="phone" v-model="phone" placeholder="Please enter your phone number here..." />
            </div>
            <div class="v-input">
              <label for="coupon">COUPON Code</label>
              <input type="text" id="coupon" v-model="coupon" placeholder="Enter your coupon if you have one." />
              <button>APPLY COUPON</button>
            </div>
          </div>
          <div class="cart-total">
            <h3 class="border-bottom">CART TOTAL</h3>
            <div class="d-flex align-items-center justify-content-between border-bottom py-3">
              <span>SUBTOTAL</span>
              <strong>$499.00</strong>
            </div>

            <div class="d-flex align-items-center justify-content-between border-bottom py-3">
              <span>SHIPPING</span>
              <div class="selection">
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="flat" id="flat" value="flat" v-model="shipping" />
                  <label class="form-check-label" for="flat"> Flat rate: $3.00 </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="free" id="free" value="free" v-model="shipping" />
                  <label class="form-check-label" for="free"> Free shipping </label>
                </div>
                <div class="form-check">
                  <input
                      class="form-check-input"
                      type="radio"
                      name="local"
                      id="local"
                      value="local"
                      v-model="shipping"
                  />
                  <label class="form-check-label" for="local"> Local pickup </label>
                </div>
              </div>
            </div>

            <div class="d-flex align-items-center justify-content-between border-bottom py-3">
              <span>TOTAL</span>
              <strong>$504.00</strong>
            </div>
            <div class="d-flex justify-content-end">
              <button>PROCEED TO CHECKOUT</button>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import ProductScore from "~/components/ProductScore";
import SavedBox from "~/components/SavedBox";
import ProductItemBox from "~/components/ProductItemBox.vue";

export default {
  name: "index",
  components: {ProductItemBox, SavedBox, ProductScore},
  layout: "profile",
  data() {
    return {
      title: "Lips care Products",
      address: "",
      phone: "",
      coupon: "",
      shipping: "",
      items: [
        {
          id: 1,
          thumb: "/images/img1.jpg",
          title: "Sella body butter type black fpr face skin",
          desc: "20 ml",
          count: 1,
          discount: 0.12,
          price: 250,
          totalprice: 220,
        },
        {
          id: 2,
          thumb: "/images/img1.jpg",
          title: "Sella body butter type black fpr face skin",
          desc: "20 ml",
          count: 1,
          discount: 0.12,
          price: 450,
          totalprice: 396,
        },
        {
          id: 3,
          thumb: "/images/img1.jpg",
          title: "Sella body butter type black fpr face skin",
          desc: "20 ml",
          count: 1,
          discount: 0.12,
          price: 350,
          totalprice: 308,
        },
      ],
    }
  }
}
</script>

<style scoped>
.PageBkg {
  background-image: url("~assets/pictures/PageBack.jpg");
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
}

.free-shipping {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 32px;
  border-radius: 16px;
  box-shadow: 0 0 10px 4px rgba(233, 157, 123, 0.63);
  background: white;
}

.free-shipping h2 {
  color: #055452;
}

.free-shipping img {
  width: 180px;
}

.link {
  appearance: none;
  color: #055452;
  text-decoration: none;
}

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 1px #055452;
  border-radius: 24px;
}

.btn span {
  padding-right: 10px;
  text-transform: capitalize;
}

.v-input {
  width: 100%;
  margin: 28px 0;
  display: flex;
  flex-direction: column;
  color: #231942;
}

.v-input label {
  margin-bottom: 12px;
}

.v-input input {
  width: 100%;
  padding: 10px 14px;
  border-radius: 8px;
  border: 1px solid #c6c6c6;
}

.v-input button {
  font-size: 14px;
  width: 200px;
  margin: 14px 0;
  border-radius: 8px;
  padding: 10px;
  background: white;
  border: 1px solid #c6c6c6;
}

.cart-total {
  width: 100%;
  margin: 28px 0;
  border-radius: 8px;
  padding: 20px 28px;
  background: white;
  box-shadow: 0 0 5px 2px rgb(221, 221, 221);
}
.cart-total h3 {
  font-size: 24px;
  font-weight: 400;
  color: #231942;
  padding: 10px 0;
}

.cart-total strong {
  color: #231942;
  font-size: 20px;
  font-weight: 600;
}

.cart-total button {
  color: white;
  border: 0;
  padding: 20px 32px;
  margin-top: 20px;
  border-radius: 10px;
  background: #e99d7b;
}

.cart-total .selection .form-check {
  direction: ltr;
  display: flex;
  gap: 30px;
  padding-bottom: 10px;
}

.cart-total .selection .form-check-input:checked {
  border-color: #e99d7b;
}
.cart-total .selection .form-check-input:checked::after {
  background-color: #e99d7b;
  border-color: #eee;
}
</style>