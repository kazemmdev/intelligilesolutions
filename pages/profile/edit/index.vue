<template>
  <div class="px-4">
    <Portal to="under-header">
      <div class="container-full d-lg-none py-2 subNavPage px-4">
        <div class="row w-100 justify-content-between g-0">
          <nuxt-link class="col d-flex align-items-center gap-3 text-dark text-decoration-none" to="/profile">
            <img src="~/assets/svg/angle-small-right.svg" alt=""/>
            <span>Back</span>
          </nuxt-link>
          <!--  Actions are here  -->
          <div class="col-auto g-0"></div>
        </div>
      </div>
    </Portal>

    <h3 class="pb-2">Personal Information</h3>
    <div class="container g-2">
      <div class="row border rounded-3">
        <div class="col-md-12 col-lg-6 border-bottom border-r">
          <input-field v-model="userData.FullName" name="FullName" title="Full Name" placeholder="Please Enter your full name" :optional="true" @saving="save"/>
        </div>
        <div class="col-md-12 col-lg-6 border-bottom">
          <input-field v-model="userData.email" name="email" title="Email" type="email" placeholder="Please Enter your email" :optional="true" @saving="save"/>
        </div>
        <div class="col-md-12 col-lg-6 border-b border-r">
          <input-field v-model="userData.phonenum" name="phonenum" title="Phone Num" placeholder="Please Enter your phone number" :optional="true" @saving="save"/>
        </div>
        <div class="col-md-12 col-lg-6">
          <input-field v-model="userData.password" name="password" title="Password" type="password" placeholder="Please Enter your password" :optional="true" @saving="save"/>
        </div>
      </div>
    </div>

    <h3 class="pb-2 pt-5">Address Information</h3>
    <div class="container g-2">
      <div class="row border rounded-3">
        <div class="col-md-12 col-lg-6 border-bottom border-r">
          <input-field v-model="userData.firstname" name="firstname" title="First name" placeholder="Please Enter your first name" @saving="save"/>
        </div>
        <div class="col-md-12 col-lg-6 border-bottom">
          <input-field v-model="userData.lastname" name="lastname" title="Last name" placeholder="Please Enter your last name" @saving="save"/>
        </div>
        <div class="col-md-12 col-lg-6 border-bottom border-r">
          <input-field v-model="userData.streetaddress" name="streetaddress" title="Street Address" placeholder="Please Enter your street address" @saving="save"/>
        </div>
        <div class="col-md-12 col-lg-6 border-bottom">
          <input-field v-model="more" name="apt" title="Apt,suite,etc.(optional)" placeholder="Please Add optional data" :optional="true" @saving="save"/>
        </div>
        <div class="col-md-12 col-lg-6 border-bottom border-r">
          <input-field v-model="userData.city" name="city" title="City" placeholder="Please Enter your city" @saving="save"/>
        </div>
        <div class="col-md-12 col-lg-6 border-bottom">
          <input-field v-model="userData.state" name="state" title="State" placeholder="Please Enter your state" @saving="save"/>
        </div>
        <div class="col-md-12 col-lg-6 border-bottom border-r">
          <input-field v-model="userData.zipcode" name="zipcode" title="Zip Code" placeholder="Please Enter your zip code" @saving="save"/>
        </div>
        <div class="col-md-12 col-lg-6 border-bottom">
          <input-field v-model="userData.phonenum" name="phonenum" title="Phone Num" placeholder="Please Enter your phone" @saving="save"/>
        </div>
        <div class="col-12 p-4 mb-4">
          <label for="delivery" class="form-label">Delivery instructions</label>
          <textarea v-model="userData.deliveryinstruction" class="form-control" id="delivery" rows="3" placeholder="write something..."></textarea>
        </div>
      </div>
    </div>

    <h3 class="pb-2 pt-5">Payment Method</h3>
    <span class="text-black-50">Choose your payment method below</span>
    <div class="container g-2 mb-2">
      <div class="row flex flex-wrap py-4 gap-2">
        <bank-card bank="paypal" :number="card" :select="cardSelected === 'paypal'" @click.native="cardSelected = 'paypal'"/>
        <bank-card bank="master" :number="card" :select="cardSelected === 'master'" @click.native="cardSelected = 'master'"/>
        <bank-card/>
      </div>
    </div>

    <div class="d-flex align-items-center gap-3 pt-5 pb-4">
      <span class="circle">1</span>
      <h3 class="mb-0">Village Bank</h3>
    </div>
    <div class="container g-2 mb-10">
      <div class="row border rounded-3">
        <div class="col-md-12 col-lg-6 border-bottom border-r">
          <input-field v-model="userData.firstname" name="firstname" title="First name" placeholder="Please Enter your first name" @saving="save"/>
        </div>
        <div class="col-md-12 col-lg-6 border-bottom">
          <input-field v-model="userData.lastname" name="lastname" title="Last name" placeholder="Please Enter your last name" @saving="save"/>
        </div>
        <div class="col-md-12 col-lg-6 border-bottom border-r">
          <input-field v-model="userData.cardnumber" name="cardnumber" title="Card Number" placeholder="Please Enter your street address" @saving="save"/>
        </div>
        <div class="col-md-12 col-lg-6 border-bottom">
          <input-field v-model="userData.cvv" name="cvv" title="CVV" placeholder="Please Add optional data" @saving="save"/>
        </div>
        <div class="col-md-12 col-lg-6 border-b border-r">
          <input-field v-model="userData.card_exp_month" name="card_exp_month" title="Exp Month" placeholder="Please Enter your city" @saving="save"/>
        </div>
        <div class="col-md-12 col-lg-6">
          <input-field v-model="userData.card_exp_year" name="card_exp_year" title="Exp Year" placeholder="Please Enter your state" @saving="save"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputField from "../../../components/InputField";
import BankCard from "../../../components/BankCard";

export default {
  name: "profile-edit",
  components: {BankCard, InputField},
  layout: "profile",
  data() {
    return {
      userData: {
        FullName: '',
        aptsuite: '',
        card_exp_month: '',
        card_exp_year: '',
        cardfirstname: '',
        cardlastname: '',
        cardnumber: '',
        city: '',
        cvv: '',
        deliveryinstruction: '',
        email: '',
        firstname: '',
        lastname: '',
        password: '',
        paymentmethod: '',
        phonenum: '',
        state: '',
        streetaddress: '',
        zipcode: '',
      },
      more: "",
      card: "1234-5678-9102-1112",
      cardSelected: "paypal",
    };
  },
  async asyncData({$api, store, error}) {
    return await $api.get(`wp/v2/users/${store.state.user.id}`).then(response => {
      return {userData: response.data.acf}
    }).catch(e => error())
  },
  methods: {
    save(e) {
      let data = {
        "data": this.userData
      }

      this.$api.put(`/wp/v2/users/${this.$store.state.user.id}`, data)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
    },
  },
};
</script>

<style scoped>
.border-b {
  border-bottom: 1px solid #dee2e6;
}

.border-r {
  border-right: none;
}

@media (min-width: 992px) {
  .border-r {
    border-right: 1px solid #dee2e6;
  }

  .border-b {
    border-bottom: none;
  }
}

.form-label {
  font-size: 14px;
  color: #838383;
}

.circle {
  background-color: white;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 38px;
  width: 38px;
  padding: 10px;
  border: 2px solid #055452;
  color: #055452;
  font-size: 24px;
}
</style>
