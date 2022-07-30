<template>
  <Modal :open="open" @close="$emit('close', true)">
    <div class="px-4 py-4 d-flex flex-column justify-content-between align-items-center">
      <div class="form-input">
        <input id="first_name" v-model="firstname" type="text" placeholder="Alex Morjani" />
        <label for="first_name">First Name</label>
      </div>
      <div class="form-input">
        <input id="last_name" v-model="lastname" type="text" placeholder="Shelbi max" />
        <label for="last_name">Last Name</label>
      </div>
      <div class="form-input">
        <input
          id="card_number"
          v-model="cardnumber"
          placeholder="0000 0000 0000 0000"
          maxlength="19"
          type="tel"
          inputmode="numeric"
          pattern="[0-9\s]{13,19}"
          autocomplete="cc-number"
        />
        <label for="card_number">Card Number</label>
        <img src="~/assets/svg/credit-card.svg" width="28" />
      </div>
      <div class="form-input">
        <input id="cvv" v-model="cvv" type="text" placeholder="****" maxlength="4" />
        <label for="cvv">Cvv</label>
        <img src="~/assets/svg/eye.svg" width="28" />
      </div>
      <div class="d-flex w-100 gap-3">
        <div class="form-input">
          <input id="exp_month" v-model="expmonth" type="text" placeholder="DD/MM" maxlength="5" />
          <label for="exp_month">Exp Month</label>
          <img src="~/assets/svg/calendar.svg" width="28" />
        </div>
        <div class="form-input">
          <input id="exp_year" v-model="expyear" type="text" placeholder="YY" maxlength="2" />
          <label for="exp_year">Exp Year</label>
          <img src="~/assets/svg/calendar.svg" width="28" />
        </div>
      </div>
      <div class="button-add">Add Card</div>
    </div>
  </Modal>
</template>

<script>
import Modal from "@/components/Modal";
import InputField from "@/components/InputField";

export default {
  name: "NewTicketBox",
  components: { InputField, Modal },
  props: ["open"],
  data() {
    return {
      firstname: "",
      lastname: "",
      cardnumber: "",
      cvv: "",
      expmonth: "",
      expyear: "",
    };
  },
};
</script>

<style scoped>
.button-add {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 100%;
  font-size: 18px;
  color: white;
  border: none;
  border-radius: 16px;
  padding: 6px 48px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  margin-top: 24px;
  text-align: center;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.05);
  background: rgb(212, 143, 112);
}
.button-add:hover {
  background-color: #e8926a;
}

.form-input {
  position: relative;
  width: 100%;
  margin-bottom: 16px;
}

.form-input input {
  width: 100%;
  border-radius: 16px;
  margin-bottom: 12px;
  font-size: 16px;
  outline: 0;
  padding: 16px;
  transition: all 0.2s ease-in-out;
  border: solid 2px #e9e8eb;
}
.form-input input:focus {
  border-color: #e99d7b;
}

.form-input label {
  position: absolute;
  top: -10px;
  left: 16px;
  padding: 0 4px;
  color: #9a9ca9;
  background: #fff;
  transition: all 0.2s ease-in-out;
}

.form-input input:focus + label {
  color: #e99d7b;
}

.form-input img {
  position: absolute;
  right: 16px;
  top: 28%;
  filter: invert(0.6);
  height: 18px;
}
.form-input input:focus ~ img {
  filter: invert(0.6) sepia(100%) hue-rotate(330deg) saturate(1.4);
}

.form-select {
  display: block;
  width: 100%;
  font-weight: 400;
  line-height: 1.5;
  padding-left: 15px;
  background-image: url("~/assets/svg/selection.svg") !important;
  background-position: right 0.75rem center;
  background-size: 16px 12px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  appearance: none;
}
</style>
