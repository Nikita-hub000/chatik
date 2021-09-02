<template>
  <message :message="message" @removeMsg="remove" @edit="edit" />

  <message-form @createMsg="create" />
</template>

<script>
import Message from "./components/Message.vue";
import MessageForm from "./components/MessageForm.vue";
export default {
  components: {
    Message,
    MessageForm,
  },
  data() {
    return {
      message: [
        {
          id: 1,
          name: "Vitya",
          text: "BYEBYE",
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
        },
        {
          id: 2,
          name: "Kolya",
          text: "BYE",
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
        },
        {
          id: 3,
          name: "Andrey",
          text: "blabla",
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
        },
        {
          id: 4,
          name: "Vitya",
          text: "BYEBYE",
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
        },
        {
          id: 5,
          name: "Kolya",
          text: "BYE",
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
        },
        {
          id: 6,
          name: "Andrey",
          text: "blabla",
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
        },
        {
          id: 7,
          name: "Vitya",
          text: "BYEBYE",
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
        },
        {
          id: 8,
          name: "Kolya",
          text: "BYE",
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
        },
        {
          id: 9,
          name: "Andrey",
          text: "blabla",
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
        },
      ],
    };
  },
  methods: {
    create(msg) {
      this.message.push(msg);
    },
    remove(msg) {
      this.message = this.message.filter((x) => x.id !== msg.id);
    },
    edit(mess, msg) {
      console.log(mess);
      console.log(msg);
      msg.text = mess;
    },
    async renderObj() {
      await fetch("https://jsonplaceholder.typicode.com/comments")
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((e) => console.log(e));
    },
  },
  mounted() {
    this.renderObj();
  },
};
</script>

<style>
.chatAndMessage {
  width: 550px;
  height: 450px;
  overflow-y: auto;
  border: 1px solid #dbdbdd;
  background: #ffffff;
}

.messageInChat {
  overflow: hidden;
  margin-bottom: 10px;
  border-radius: 5px;
  padding: 5px;
}

.messageClient {
  max-width: 286px;
  background: #00a6e8;
  color: white;
  left: 10px;
  width: 80%;
  float: left;
  padding: 5px;
}

.messageManager {
  max-width: 286px;
  background: #dedede;
  color: black;
  right: 10px;
  width: 80%;
  float: right;
  padding: 5px;
}
</style>
