<template>
  <div class="dialog" role="dialog" v-show="open">
    <div class="dialog-bg" @click="close"/>
    <transition>
      <div class="dialog-wrapper" v-if="open">
        <div class="dialog-body">
          <div class="dialog-header">
            <h4>{{ title }}</h4>
            <span @click="close">
              &#215;
            </span>
          </div>
          <slot/>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    title: {
      type: String,
      default: "",
    },
    open: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    close() {
      this.$emit('close', false)
    }
  },
}
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transform-origin: bottom center;
  animation: fade-in-pulse-08 .4s backwards cubic-bezier(0.1, 0, 0.3, 1)
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

@keyframes fade-in-pulse-08 {
  0% {
    opacity: 0;
    transform: translateY(300px);
  }
  50% {
    opacity: 1
  }
  100%, 70% {
    transform: translateY(0);
  }
}

.dialog {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.dialog-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  backdrop-filter: blur(10px);
}

.dialog-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dialog-body {
  background-color: white;
  overflow: hidden;
  border-radius: 16px;
  margin: 0 36px;
  max-width: 640px;
  width: 100%;
  height: fit-content;
  z-index: 9999;
  box-shadow: 0 9px 10px 0 rgb(0 0 0 / 8%), 0 3px 5px 0 rgb(0 0 0 / 10%);
  border: 1px solid #e0e0e0;
}

.dialog-header {
  position: relative;
  display: flex;
  align-items: center;
  background: #65a79f;
  color: white;
  justify-content: center;
  padding: 14px 0 10px;
}

.dialog-header h4 {
  font-size: 20px;
}

.dialog-header span {
  position: absolute;
  right: 16px;
  top: 0;
  font-size: 40px;
  cursor: pointer;
}
</style>
