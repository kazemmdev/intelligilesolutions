<template>
  <Modal :open="open" @close="$emit('close', true)">
    <div class="px-4 py-4 d-flex flex-column justify-content-between align-items-center">
      <div class="form-input">
        <input id="first_name" v-model="firstname" type="text" placeholder="Alex Morjani">
        <label for="first_name">First Name</label>
      </div>
      <div class="form-input">
        <input id="last_name" v-model="lastname" type="text" placeholder="Shelbi max">
        <label for="last_name">Last Name</label>
      </div>
      <div class="form-input">
        <input id="card_number" v-model="cardnumber" placeholder="0000 0000 0000 0000" maxlength="19" type="tel" inputmode="numeric" pattern="[0-9\s]{13,19}" autocomplete="cc-number">
        <label for="card_number">Card Number</label>
        <card-svg width="28"/>
      </div>
      <div class="form-input">
        <input id="cvv" v-model="cvv" type="text" placeholder="****" maxlength="4">
        <label for="cvv">Cvv</label>
        <eye-svg width="28"/>
      </div>
      <div class="d-flex w-100 gap-3">
        <div class="form-input">
          <input id="exp_month" v-model="expmonth" type="text" placeholder="DD/MM"  maxlength="5">
          <label for="exp_month">Exp Month</label>
          <calender-svg width="28"/>
        </div>
        <div class="form-input">
          <input id="exp_year" v-model="expyear" type="text" placeholder="YY"  maxlength="2">
          <label for="exp_year">Exp Year</label>
          <calender-svg width="28"/>
        </div>
      </div>
      <div class="button-add">Add Card</div>
    </div>
  </Modal>
</template>

<script>
import Modal from "@/components/Modal";
import InputField from "@/components/InputField";
import EyeSvg from "~/assets/svg/eye.svg?inline"
import CardSvg from "~/assets/svg/credit-card.svg?inline"
import CalenderSvg from "~/assets/svg/calendar.svg?inline"

export default {
  name: "NewTicketBox",
  components: {InputField, Modal, EyeSvg, CardSvg, CalenderSvg},
  props: ['open'],
  data() {
    return {
      firstname: '',
      lastname: '',
      cardnumber: '',
      cvv: '',
      expmonth: '',
      expyear: ''
    }
  }
}
</script>

<style scoped>
.button-add {
  display: flex;
  align-items: center;
  justify-content: center;
  height:60px;
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
  background: rgb(212,143,112);
  background: linear-gradient(180deg, rgba(212,143,112,1) 60%, rgba(193,131,102,1) 91%, rgba(185,126,98,1) 98%, rgba(174,119,92,1) 100%);}

.button-add:hover {
  background-color: #e8926a
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

.form-input svg {
  position: absolute;
  right: 16px;
  top: 28%;
  fill: #9a9ca9;
  height: 18px;
}

.form-input input:focus ~ svg {
  fill: #e99d7b;
}

.form-select {
  display: block;
  width: 100%;
  font-weight: 400;
  line-height: 1.5;
  padding-left: 15px;
  background-image: url('~/assets/svg/selection.svg') !important;
  background-position: right 0.75rem center;
  background-size: 16px 12px;
  transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
  appearance: none;
}

</style>