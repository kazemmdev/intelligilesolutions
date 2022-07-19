<template>
  <div>
    <template v-if="user">
      <dropdown>
        <button type="button" class="btn loginbtn">
          <img src="~/assets/svg/angle.svg" alt="">
          <span class="signintext">{{ user.name }}</span>
        </button>
        <template slot="content">
          <nuxt-link class="nav-item" to="/profile">
            <div class="nav-item-text">
              <div class="nav-item-user">
                <img src="~/assets/svg/user.svg" alt="" width="15">
                {{ user.name }}
              </div>
              <i class="bi bi-chevron-right"></i>
            </div>
          </nuxt-link>
          <nuxt-link class="nav-item" to="/cart">
            <img src="~/assets/svg/cart-add.svg" alt="" width="19">
            <div class="nav-item-text">Cart</div>
          </nuxt-link>
          <nuxt-link class="nav-item" to="/orders">
            <img src="~/assets/svg/cart-check.svg" alt="" width="19">
            <div class="nav-item-text">Orders</div>
          </nuxt-link>
          <nuxt-link class="nav-item" to="/saved">
            <i class="bi bi-heart"></i>
            <div class="nav-item-text">Saved</div>
          </nuxt-link>
          <nuxt-link class="nav-item" to="/comments">
            <img src="~/assets/svg/comment.svg" alt="" width="19">
            <div class="nav-item-text">Comments</div>
          </nuxt-link>
          <nuxt-link class="nav-item" to="/supports">
            <img src="~/assets/svg/headset.svg" alt="" width="19">
            <div class="nav-item-text">Support</div>
          </nuxt-link>
          <a href="#" class="nav-item" @click="logout">
            <img src="~/assets/svg/sign-out.svg" alt="" width="19">
            <div>Exit</div>
          </a>
        </template>
      </dropdown>
    </template>
    <template v-else>
      <nuxt-link to="/login">
        <button type="button" class="btn loginbtn">
          <i class="bi bi-box-arrow-right loginicon">
            <span class="signintext">sign in</span>
          </i>
        </button>
      </nuxt-link>
    </template>
  </div>
</template>

<script>
import {mapState} from "vuex";
import dropdown from "../Dropdown";

export default {
  name: "TheNavMenu",
  computed: {
    ...mapState({
      user: state => state.user
    })
  },
  components: {dropdown},
  methods: {
    logout() {
      // logout process
    }
  }
}
</script>

<style scoped>
.loginbtn {
  background-color: #e99d7b !important;
  height: 45px;
  border-radius: 30px !important;
}

.loginicon {
  color: #055452;
  font-size: 15pt;
}

.signintext {
  font-weight: 600;
  font-size: 16px;
  color: #055452;
  font-family: 'Open Sans';
  font-style: normal;
  padding: 8px;
}

.bi {
  font-size: 20px;
  font-weight: bold;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 10px;
  padding-bottom: 10px;
  color: white;
  appearance: none;
  text-decoration: none;
}

.nav-item:hover {
  color: #222;
}

.nav-item-text {
  display: flex;
  width: 100%;
  text-align: left;
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(147, 193, 188, 0.63);
}

.nav-item-user {
  flex: 1;
  display: flex;
  gap: 15px;
}

.nav-item-user img {
  padding-top: 0 !important;
  padding-bottom: 2px;
}

.nav-item {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  margin: 10px;
  color: white;
  appearance: none;
  text-decoration: none;
}

.nav-item:hover {
  color: #222;
}

.nav-item-text {
  display: flex;
  width: 100%;
  text-align: left;
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(147, 193, 188, 0.63);
}

.nav-item img {
  filter: invert();
  padding-top: 2px;
}

.nav-item:hover img {
  filter: none;
}

</style>