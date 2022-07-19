<template>
  <div>
    <the-header>
      <PortalTarget name="under-header"/>
    </the-header>
    <div class="d-none d-lg-block mt-5">
      <div class="container">
        <div class="row">
          <div class="col-4 col-xl-3">
            <profile-menu-list/>
          </div>
          <div class="col-8 col-xl-9">
            <nuxt/>
          </div>
        </div>
      </div>
    </div>
    <div class="d-block d-lg-none mt-5">
      <div class="container">
        <div class="row">
          <nuxt/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from "../components/Navigation/TheHeader";
import ProfileMenuList from "../components/Navigation/ProfileMenuList";

export default {
  name: "profile",
  components: {ProfileMenuList, TheHeader},
}
</script>

