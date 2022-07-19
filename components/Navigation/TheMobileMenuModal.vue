<template>
    <section class="d-lg-none">
    <!-- mobile menu modal -->
        <div @click="CloseModal" class="backdrop"></div>
        <div class="MenuModal">

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
  }

</style>