<template>
    <section class="d-lg-none">
    <!-- mobile menu modal -->
        <div @click="CloseModal" class="backdrop"></div>
        <div class="MenuModal">
            <nuxt-link class="nav-link" to="/profile">
            <p class="MobileMenuTxt text-white">User Login</p>
            </nuxt-link>
            <nuxt-link class="nav-link" to="/admin">
            <p class="MobileMenuTxt text-white">Admin Login</p>
            </nuxt-link>
            <nuxt-link class="nav-link" to="/subadmin">
            <p class="MobileMenuTxt text-white">Sub Login</p>
            </nuxt-link>
            <div class="py-1">
            <hr>
            </div>
            <nuxt-link class="nav-link" to="/">
           <p class="pt-2 MainMenuTxt">Home</p>
            </nuxt-link>
            <nuxt-link class="nav-link" to="/about">
            <p class="MainMenuTxt">About</p>
            </nuxt-link>
            <nuxt-link class="nav-link" to="/products">
           <p class="MainMenuTxt">Products</p>
            </nuxt-link>
            <nuxt-link class="nav-link" to="/contact">
           <p class="MainMenuTxt">Contact</p>
            </nuxt-link>
        </div>
  </section>
</template>

<script>
    export default {
        props: ["menu_status"],
        methods: {
        CloseModal() {
            this.$emit('SendModalStatus')
        },
      },
    };
</script>

<style scoped>

 .MainMenuTxt {
    font-family: 'Open Sans';
    font-size: 15pt;
    color: #fff;
 }

  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

/* modal menu */
  .MenuModal {
    background-color: #055452;
    min-height: 100vh;
    width: 70%;
    position:absolute;
    left:0;
    top:0;
    z-index:2;
    padding-left: 30px;
    padding-top: 30px;
  }

  hr {
    color: #fff;
    width: 100% !important;
    height: 1px !important;
  }

  .MobileMenuTxt {
   font-family: 'open sans';
   font-size: 12pt;
  }

</style>