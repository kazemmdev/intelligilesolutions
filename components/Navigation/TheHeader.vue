<template>
  <!-- navigation section -->
  <header class="position-relative">
    <div class="container py-4 d-none d-lg-block">
      <div class="row justify-content-between">
        <div class="col-lg-1">
          <img src="~/assets/pictures/logokandaka.svg" alt="logo" class="logo"/>
        </div>
        <div class="col-auto col-lg-5 text-start pe-5">
          <nav class="navbar shadow-0 navbar-expand-lg py-4 pe-2">
            <div class="collapse navbar-collapse" id="navmenu">
              <ul class="navbar-nav">
                <nuxt-link class="nav-link" to="/">
                  Home
                </nuxt-link>
                <li class="nav-item px-3">
                  <nuxt-link class="nav-link" to="/about">
                    About
                  </nuxt-link>
                </li>
              <li class="DropDownNav nav-item px-3">
                <nuxt-link class="nav-link" to="/products">
                  Products
                </nuxt-link>
                 <div class="DropDown">
                    <nuxt-link class="nav-link" to="/products">
                    Lip Care
                    </nuxt-link>
                     <nuxt-link class="nav-link" to="/products">
                    Skin Care
                    </nuxt-link>
                     <nuxt-link class="nav-link" to="/products">
                    Jewelry
                    </nuxt-link>
                     <nuxt-link class="nav-link" to="/products">
                    Nail
                    </nuxt-link>
                     <nuxt-link class="nav-link" to="/products">
                    Perfum
                    </nuxt-link>
                 </div>
              </li>
                <li class="nav-item px-3">
                  <nuxt-link class="nav-link" to="/contact">
                    Contact
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div class="col-lg-3 text-end py-4 SearchForm">
          <!-- search form -->
          <div class="d-flex flex-row">
            <div class="form-outline">
              <input @blur="OnBlur" @focus="OnFocus" placeholder="Search..." type="search" id="form1" class="form-control inputstyle" />
            </div>
            <button type="button" :class="OnFocusCss" class="btn searchbtn rounded-circle">
              <i class="bi bi-search searchicon"></i>
            </button>
          </div>
        </div>
        <div class="col-lg-3 text-start py-4 d-flex flex-row flex-row-reverse">
          <TheNavMenu/>
          <button type="button" class="btn shopbtn">
            <i class="bi bi-bag shopicon"></i>
          </button>
        </div>
      </div>
    </div>
    <!-- menu responsive -->
    <div class="container-full d-lg-none pt-3 px-4">
      <div class="row g-0 border-bottom pb-3">
        <div class="col-4">
          <div class="d-flex flex-row align-items-center mt-3">
            <img src="~/assets/pictures/search.svg" class="SearchIcon" alt="search">
            <div class="px-1"></div>
            <img src="~/assets/pictures/shop.svg" class="ShopIcon" alt="search">
          </div>
        </div>
        <div class="col-4 text-center">
          <img src="~/assets/pictures/logokandaka.png" alt="logo" class="logo"/>
        </div>
        <div class="col-4 text-start">
          <img @click="EnableMobileMenu" src="~/assets/pictures/menu.svg" alt="menu" class="MobileMenuIcon">
        </div>
      </div>
    </div>

    <TheMobileMenuModal @SendModalStatus="DisableMobileMenu" v-if="MobileMenu" :menu_status="MobileMenu" />
    <!--  sub navigation holder  -->
    <slot/>
  </header>
</template>

<script>
import TheMobileMenuModal from "@/components/Navigation/TheMobileMenuModal.vue";
import TheNavMenu from "./TheNavMenu";

export default {
  name: "TheHeader",
  components: {TheNavMenu, TheMobileMenuModal},
  props: ["menu_data"],
   data() {
    return {
      Focused: false,
      MobileMenu: false,
    }
  },
   methods: {
    OnFocus() {
      this.Focused = true;
    },
    OnBlur() {
      this.Focused = false;
    },
    EnableMobileMenu() {
      this.MobileMenu = true;
    },
    DisableMobileMenu() {
      this.MobileMenu = false;
    }
  },
  
  computed: {
    OnFocusCss() {
      return this.Focused ? 'FocusedBtn' : 'searchbtn';
    }
  }
};
</script>

<style scoped>

.DropDownNav:hover .DropDown {
  display: block;
  padding-right: 0px;
  padding-left: 0px;
}

.DropDown {
  display: none;
  font-family: 'Open Sans';
  font-size: 10pt !important;
  text-align: left;
  background-color: #fff;
  border-radius: 13px;
  width: 60%;
  position: absolute;
  right: 5%;
  margin-top: 2px;
  padding: 20px;
}

.DropDown a {
  font-size: 12pt !important;
  padding-left: 20px !important;
}


.DropDown a:hover {
  font-size: 12pt !important;
  background-color: #e99d7b!important;
  color: #fff!important;
}

/* navbar component style */
nav a {
  color: #055452 !important;
  font-family: Playfair Display !important;
  font-weight: 700;
  font-size: 18px;
}

nav a:hover {
  color:  #e99d7b !important;
}

.logo {
  border-radius: 50%;
  width: 97px;
}

@media screen and (max-width: 320px) {
  .logo {
    display: none;
  }
}
 

@media all and (max-width: 994px) {

  .logo {
    border-radius: 50%;
    width: 70px;
  }

  .SearchIcon {
    width: 40px;
    background-color: #e99d7b;
    border-radius: 50%;
    padding: 9px;
  }

  .ShopIcon {
    width: 40px;  
    background-color: #e99d7b;
    border-radius: 40%;
    padding: 9px;
  }

}

@media all and (max-width: 1200px) {
  .SearchForm {
    display: none;
  }
}

 ::placeholder {
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
   opacity: 1 !important;
 }

input:focus {
  width: 120%;
  border: 1px solid #e99d7b !important;
}

input:focus::placeholder {
  color: #e99d7b;
  transition: 0.3s;
}


.MobileMenuBack {
  box-shadow: 0 1.5px 3px 0 rgba(0, 0, 0, 0.09);
}

.MobileMenuIcon {
  margin-top: 30px;
  cursor: pointer;
}

.searchbtn {
  background-color: #e99d7b !important;
  margin-left: -36px !important;
  margin-top: 0px;
  height: 37px;
  width: 37px;
  z-index: 1;
  box-shadow: none;
  transition: 0.5;
}

.FocusedBtn {
 background-color: #e99d7b !important;
  margin-left: 5px !important;
  margin-top: 0px;
  height: 37px;
  width: 37px;
  z-index: 1;
  box-shadow: none;
  animation-name: move;
  animation-duration: 0.5s; 
}


.searchicon {
 color: #055452;
 position: relative;
 right: 2px;
}


.searchicon:hover {
 color: #fff;
 transition: 0.3s;
}

.shopicon {
 color: #055452;
 position: relative;
 right: 1px;
}

.shopicon:hover {
 color: #fff;
 transition: 0.3s;
}

.inputstyle {
  border: 0.5px solid #707070 !important;
  border-radius: 30px !important;
}


.loginbtn {
  background-color: #e99d7b !important;
  height: 45px;
  border-radius: 30px !important;
  box-shadow: none;
  margin-top: -4px;
}

.loginicon {
  color: #055452;
  font-size: 15pt;
}

.loginicon:hover {
  color: #fff;
  transition: 0.3s;
}

.signintext {
  font-weight: 600;
  font-size: 16px;
  color: #055452;
  font-family: 'Open Sans';
  font-style: normal;
  padding: 8px;
}

.signintext:hover {
  color: #fff;
  transition: 0.3s;
}

.shopbtn {
  background-color: #e99d7b !important;
  border-radius: 50% !important;
  margin-right: 10px;
  height: 40px;
  width: 40px;
  box-shadow: none;
}

@media all and (max-width: 1200px) {
  .SearchForm {
    display: none;
  }
}
</style>
