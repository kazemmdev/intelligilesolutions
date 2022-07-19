<template>
  <div class="nav-dropdown" ref="dropdown">
    <div data-toggle="dropdown" :aria-haspopup="isShow" :aria-expanded="isShow" @click="isShow=!isShow">
      <slot/>
    </div>
    <transition>
      <div class="navbar-menu" aria-labelledby="dropdownMenuNavbar" v-show="isShow">
        <slot name="content"/>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Dropdown",
  data: () => ({
    isShow: false
  }),
  methods: {
    dropDownBlur(e) {
      if (this.$refs.dropdown !== e.target && !this.$refs.dropdown.contains(e.target))
        this.isShow = false
    }
  },
  mounted() {
    window.addEventListener("click", this.dropDownBlur)
  },
  destroyed() {
    window.removeEventListener("click", this.dropDownBlur)
  }
}
</script>

<style scoped>
.nav-dropdown {
  position: relative;
}

.navbar-menu {
  position: absolute;
  background: #65a69e;
  display: flex;
  flex-direction: column;
  top: 64px;
  right: 0;
  padding: 10px 16px;
  border-radius: 16px;
  overflow: hidden;
  min-width: 300px;
  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 10%), 0 10px 15px 0 rgb(0 0 0 / 10%);
  z-index: 999;
}

.bg-enter-active,
.bg-leave-active,
.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease-in-out;
}

.bg-enter-from,
.bg-leave-to {
  opacity: 0;
}

.v-enter-from,
.v-leave-to {
  transform: scale(0.95);
  opacity: 0;
}
</style>
