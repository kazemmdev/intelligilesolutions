<template>
  <div class="box">
    <div class="box-body">
      <img id="thumb" :src="data.thumb" alt="">
      <div>
        <h4>{{ data.title }}</h4>
        <div class="d-flex gap-3 justify-content-between flex-wrap">
          <ProductScore :score="data.score"/>
          <span>{{ data.time }}</span>
        </div>
        <p class="d-none d-md-block">{{ data.comment }}</p>
      </div>
    </div>
    <p class="d-block d-md-none">{{ data.comment }}</p>
  </div>
</template>

<script>
import ProductScore from "@/components/ProductScore";
export default {
  name: "CommentBox",
  components: {ProductScore},
  props: ['data']
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
  align-items: flex-start;
}

.box-body #thumb {
  min-width: 100px;
  height: 100px;
  overflow: hidden;
  object-fit: cover;
  border-radius: 8px;
}

.box-body h4 {
  font-size: 20px;
  color: #055452;
}

.box-body p, .box p {
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 5px;
  padding-top: 14px;
  color: #707070 !important;
}

.box-body span {
  color: #b2b2b2;
  font-size: 14px;
}

</style>