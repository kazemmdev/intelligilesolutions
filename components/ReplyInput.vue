<template>
  <div class="reply">
    <img :src="avatar" alt="avatar">
    <input v-model="message" type="text" placeholder="Type your message here ...">
    <img class="btn" src="~/assets/svg/send.svg" alt="">
  </div>
</template>

<script>
export default {
  name: "ReplyInput",
  props: ['avatar', 'message']
}
</script>

<style scoped>
.reply {
  display: flex;
  align-items: center;
  justify-content: center;
}

.reply img {
  display: flex;
  min-width: 48px;
  height: 48px;
  overflow: hidden;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 10px;
}

.reply input {
  width: 100%;
  padding: 14px ;
  border-radius: 16px;
  border: solid 1px #e0e0e2;
  background-color: #f5f6fa;
  outline: 0;
}

.reply .btn {
  display: flex;
  margin-left: 10px;
  width: 48px;
  height: 48px;
  overflow: hidden;
  object-fit: cover;
  border-radius: 100%;
  margin-right: 10px;
  background: #e99d7b;
}
</style>