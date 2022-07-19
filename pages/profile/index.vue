<template>
  <div>
    <div class="d-block d-lg-none">
      <profile-menu-list :is-light="true" />
    </div>
  </div>
</template>

<script>
import ProfileMenuList from "../../components/Navigation/ProfileMenuList";

export default {
  name: "profile",
  layout: 'profile',
  components: {ProfileMenuList},
}
</script>

<style scoped>
.border-end {
  border-left: none !important;
}
</style>