<template>
  <div class="menu" :class="{'menu-light':isLight}">
    <div class="menu-header">
      <img src="~/assets/svg/yuser.svg" alt="">
      <div>
        <h3>{{ user.name }}</h3>
        <span>{{ user.email }}</span>
      </div>
    </div>
    <nuxt-link class="menu-item" to="/profile/edit">
      <div class="menu-item-text">
        <div class="menu-item-user">
          <img src="~/assets/svg/user.svg" alt="" width="15">
          Profile
        </div>
        <i class="bi bi-chevron-right"></i>
      </div>
    </nuxt-link>
    <nuxt-link class="menu-item" to="/cart">
      <div class="menu-item-text">
        <div class="menu-item-user">
          <img src="~/assets/svg/cart-add.svg" alt="" width="19">
          Cart
        </div>
        <i class="bi bi-chevron-right"></i>
      </div>
    </nuxt-link>
    <nuxt-link class="menu-item" to="/orders">
      <div class="menu-item-text">
        <div class="menu-item-user">
          <img src="~/assets/svg/cart-check.svg" alt="" width="19">
          Orders
        </div>
        <i class="bi bi-chevron-right"></i>
      </div>
    </nuxt-link>
    <nuxt-link class="menu-item" to="/saved">
      <div class="menu-item-text">
        <div class="menu-item-user">
          <i class="bi bi-heart"></i>
          Saved
        </div>
        <i class="bi bi-chevron-right"></i>
      </div>
    </nuxt-link>
    <nuxt-link class="menu-item" to="/comments">
      <div class="menu-item-text">
        <div class="menu-item-user">
          <img src="~/assets/svg/comment.svg" alt="" width="19">
          Comments
        </div>
        <i class="bi bi-chevron-right"></i>
      </div>
    </nuxt-link>
    <nuxt-link class="menu-item" to="/supports">
      <div class="menu-item-text">
        <div class="menu-item-user">
          <img src="~/assets/svg/headset.svg" alt="" width="19">
          Support
        </div>
        <i class="bi bi-chevron-right"></i>
      </div>
    </nuxt-link>
    <a href="#" class="menu-item" @click="logout">
      <div class="menu-item-text border-0">
        <div class="menu-item-user">
          <img src="~/assets/svg/sign-out.svg" alt="" width="19">
          Exit
        </div>
        <i class="bi bi-chevron-right"></i>
      </div>
    </a>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "ProfileMenuList",
  props: ['isLight'],
  computed: {
    ...mapState({
      user: state => state.user
    })
  },
  methods: {
    logout() {
      // logout process
    }
  }
}
</script>

<style scoped>
.menu {
  background: #65a69e;
  display: flex;
  flex-direction: column;
  top: 64px;
  right: 0;
  padding: 10px 16px;
  border-radius: 16px;
  overflow: hidden;
  /*min-width: 300px;*/
}

.menu-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 10px;
  color: white;
  border-bottom: 1px solid #eee;
  padding-bottom: 32px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.menu-header img {
  background: white;
  height: 60px;
  width: 60px;
  min-width: 60px;
  border-radius: 50%;
  padding: 16px;
}

.menu-header h3 {
  font-size: 24px;
  line-height: 24px;
  margin-bottom: 0;
}

.menu-header span {
  font-size: 14px;
}

.menu-item {
  display: flex;
  gap: 15px;
  margin: 10px;
  color: white;
  appearance: none;
  text-decoration: none;
}

.menu-item:hover, .nuxt-link-exact-active {
  color: #222;
  position: relative;
}

.nuxt-link-exact-active:before {
  content: '';
  position: absolute;
  background-color: #222;
  width: 4px;
  left: -25px;
  top: -18px;
  height: 56px;
}

.menu-item-text {
  display: flex;
  width: 100%;
  text-align: left;
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(147, 193, 188, 0.63);
}

.menu-item-text img {
  filter: invert();
}

.menu-item:hover .menu-item-text img,
.nuxt-link-exact-active .menu-item-text img {
  filter: none;
}

.menu-item-user {
  flex: 1;
  display: flex;
  gap: 15px;
}

.menu-light {
  background: white;
  color: #231942 !important;
}

.menu-light .menu-item {
  color: #222;
}

.menu-light .menu-item:hover {
  color: #e99d7b;
}

.menu-light .menu-item-text {
  border-bottom-color: #eee;
}

.menu-light .menu-header {
  color: #231942 !important;
}

.menu-light .menu-header img {
  background: #eee;
}

.menu-light .menu-item .menu-item-text img {
  filter: none;
}

.bi {
  font-size: 18px;
}
</style>