<template>
  <div class="input-field">
    <label :for="name" class="form-label">{{ title }} <i v-if="!optional" class="text-danger pl-2">*</i> </label>
    <input v-model="input" :type="type" class="form-control" :id="name" :placeholder="placeholder" :disabled="!editable" ref="input">
    <img src="~/assets/svg/edit.svg" alt="" width="24" v-if="!editable" @click="edit">
    <div class="btn btn-link btn-sm pl-2" v-if="editable" @click="editable=false">Save</div>
  </div>
</template>

<script>
export default {
  name: "InputField",
  props: {
    value: String,
    name: {
      type: String,
      default: "name"
    },
    title: {
      type: String,
      default: "text"
    },
    type: {
      type: String,
      default: "text"
    },
    placeholder: {
      type: String,
      default: "text"
    },
    optional: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    input: {
      get() {
        return this.value;
      },
      set(v) {
        this.$emit('input', v)
      }
    }
  },
  data() {
    return {
      editable: false
    }
  },
  methods: {
    edit() {
      this.editable = true
      setTimeout(() => {
        this.$refs.input.focus();
      }, 50)
    }
  }
}
</script>

<style scoped>
.text-danger {
  color: #ff0000 !important;
}

.input-field {
  position: relative;
  display: flex;
  align-items: center;
  padding-top: 20px;
  margin: 16px;
}

.input-field label {
  top: 0;
  font-size: 14px;
  color: #838383;
  position: absolute;
}

.input-field input {
  border: none;
  padding: 0;
  outline: none;
  background-color: white !important;
  margin-right: 10px;
  height: 34px;
  appearance: none;
  outline: 0 !important;
  box-shadow: none !important;
  border-radius: 0;
}

.input-field input:focus {
  border-bottom: 1px solid #999;
}

.input-field img {
  cursor: pointer;
}
</style>