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

    <h3 class="pb-2">Personal Information</h3>
    <div class="container">
      <div class="row border rounded-3">
        <div class="col-md-12 col-lg-6 border-bottom border-r">
          <input-field v-model="fullName" name="full_name" title="Full Name" placeholder="Please Enter your full name" :optional="true"/>
        </div>
        <div class="col-md-12 col-lg-6 border-bottom">
          <input-field v-model="email" name="email" title="Email" placeholder="Please Enter your email" :optional="true"/>
        </div>
        <div class="col-md-12 col-lg-6 border-b border-r">
          <input-field v-model="phone" name="phone" title="Phone Num" placeholder="Please Enter your phone number" :optional="true"/>
        </div>
        <div class="col-md-12 col-lg-6">
          <input-field v-model="password" name="password" title="Password" placeholder="Please Enter your password" :optional="true"/>
        </div>
      </div>
    </div>

    <h3 class="pb-2 pt-5">Address Information</h3>
    <div class="container">
      <div class="row border rounded-3">
        <div class="col-md-12 col-lg-6 border-bottom border-r">
          <input-field v-model="firstName" name="fist_name" title="First name" placeholder="Please Enter your first name"/>
        </div>
        <div class="col-md-12 col-lg-6 border-bottom">
          <input-field v-model="lastName" name="last_name" title="Last name" placeholder="Please Enter your last name"/>
        </div>
        <div class="col-md-12 col-lg-6 border-bottom border-r">
          <input-field v-model="street" name="street" title="Street Address" placeholder="Please Enter your street address"/>
        </div>
        <div class="col-md-12 col-lg-6 border-bottom">
          <input-field v-model="more" name="apt" title="Apt,suite,etc.(optional)" placeholder="Please Add optional data" :optional="true"/>
        </div>
        <div class="col-md-12 col-lg-6 border-bottom border-r">
          <input-field v-model="city" name="city" title="City" placeholder="Please Enter your city"/>
        </div>
        <div class="col-md-12 col-lg-6 border-bottom">
          <input-field v-model="state" name="state" title="State" placeholder="Please Enter your state"/>
        </div>
        <div class="col-md-12 col-lg-6 border-bottom border-r">
          <input-field v-model="zipcode" name="zipcode" title="Zip Code" placeholder="Please Enter your zip code"/>
        </div>
        <div class="col-md-12 col-lg-6 border-bottom">
          <input-field v-model="phone" name="phone" title="Phone Num" placeholder="Please Enter your phone"/>
        </div>
        <div class="col-12 p-4 mb-4">
          <label for="delivery" class="form-label">Delivery instructions</label>
          <textarea v-model="instruction" class="form-control" id="delivery" rows="3" placeholder="write something..."></textarea>
        </div>
      </div>
    </div>

    <h3 class="pb-2 pt-5">Payment Method</h3>
    <span class="text-black-50">Choose your payment method below</span>
    <div class="container mb-2">
      <div class="row flex flex-wrap py-4">
        <bank-card bank="paypal" :number="card" :select="cardSelected==='paypal'" @click.native="cardSelected='paypal'"/>
        <bank-card bank="master" :number="card" :select="cardSelected==='master'" @click.native="cardSelected='master'"/>
        <bank-card/>
      </div>
    </div>

    <h3 class="pb-2 pt-5">Village Bank</h3>
    <div class="container mb-10">
      <div class="row border rounded-3">
        <div class="col-md-12 col-lg-6 border-bottom border-r">
          <input-field v-model="firstName" name="fist_name" title="First name" placeholder="Please Enter your first name"/>
        </div>
        <div class="col-md-12 col-lg-6 border-bottom">
          <input-field v-model="lastName" name="last_name" title="Last name" placeholder="Please Enter your last name"/>
        </div>
        <div class="col-md-12 col-lg-6 border-bottom border-r">
          <input-field v-model="card" name="card" title="Card Number" placeholder="Please Enter your street address"/>
        </div>
        <div class="col-md-12 col-lg-6 border-bottom">
          <input-field v-model="cvv" name="cvv" title="CVV" placeholder="Please Add optional data"/>
        </div>
        <div class="col-md-12 col-lg-6 border-b border-r">
          <input-field v-model="expMonth" name="expMonth" title="Exp Month" placeholder="Please Enter your city"/>
        </div>
        <div class="col-md-12 col-lg-6">
          <input-field v-model="expYear" name="expYear" title="Exp Year" placeholder="Please Enter your state"/>
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
      fullName: 'Jack Dorsi Alexandreh',
      firstName: 'Jack',
      lastName: 'Dorsi Alexandreh',
      email: 'jack.dorsi@gmail.com',
      phone: '001245841025',
      password: '*********',
      street: '132 North Border Street England, CA 50085',
      city: 'California',
      state: 'California',
      zipcode: '12345678',
      more: '',
      instruction: '',
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
</style>