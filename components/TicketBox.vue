<template>
  <div class="box">
    <span>#{{ data.id }}</span>
    <div class="box-body mt-2">
      <img id="thumb" :src="data.user.avatar" alt="">
      <div class="d-flex gap-3 justify-content-between flex-wrap w-100">
        <h4>{{ data.user.name }}</h4>
        <span>{{ data.time }}</span>
      </div>
    </div>
    <p class="d-block">{{ data.message }}</p>
    <div v-if="!noState" class="d-flex gap-3 mt-3">
      <div :class="btnStyle">
        <i class="bi bi-circle"/>{{ capitalizeFirstLetter(data.state) }}
      </div>
      <div class="button">{{ capitalizeFirstLetter(data.priority) }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TicketBox",
  props: {
    data: Array|Object,
    noState: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    btnStyle() {
      if (this.data.state === 'pending') {
        return 'button warning'
      }
      if (this.data.state === 'open') {
        return 'button success'
      }
      if (this.data.state === 'closed') {
        return 'button danger'
      }
    }
  },
  methods: {
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  }
}
</script>

<style scoped>
.box {
  padding-bottom: 20px;
  margin-bottom: 28px;
  justify-content: space-between;
  border-bottom: solid 1px #e0e0e2;
}

.box-body {
  flex: 1;
  display: flex;
  gap: 24px;
  align-items: center;
}

.box-body #thumb {
  display: flex;
  min-width: 48px;
  height: 48px;
  overflow: hidden;
  object-fit: cover;
  border-radius: 8px;
}

.box-body h4 {
  font-size: 18px;
  color: #231942;
}

.box-body p, .box p {
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 5px;
  padding-top: 14px;
  color: #707070 !important;
}

.box-body span, .box span {
  color: #b2b2b2;
  font-size: 14px;
}

.button {
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: white;
  border: solid 1px #d8d8d8;
  border-radius: 6px;
  padding: 4px 20px;
  transition: all 0.3s ease-in-out;
}

.button:hover {
  background-color: #eeeeee;
}

.button .bi {
  font-weight: 800;
  line-height: 10px;
  -webkit-text-stroke: 2px;
}

.button.success {
  color: #1db812;
}

.button.warning {
  color: #e26918;
}

.button.danger {
  color: #d64553;
}

</style>