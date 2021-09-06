<template>
  <form @submit.prevent>
    <input v-model="message.title" placeholder="Сообщение" />
    <button @click="send()">Отправить</button>
  </form>
</template>

<script>
import store from '@/store/index.js'
export default {
  data() {
    return {
      message: {
        title: "",
      },
    };
  },
  methods: {
    send() {
      this.message = {
        id: Math.random(),
        name: store.state.name.name,
        text: this.message.title,
        date: `${
          new Date().getHours().length === 1
            ? `0${new Date().getHours()}`
            : `${new Date().getHours()}`
        }:${
          new Date().getMinutes().length === 1
            ? `0${new Date().getMinutes()}`
            : `${new Date().getMinutes()}`
        }`,
        editing: false,
      };
      this.$emit("createMsg", this.message);
      this.message.title = "";
    },
  },
};
</script>

<style></style>
