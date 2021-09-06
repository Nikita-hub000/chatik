<template>
  <div class="chat">
    <h1>This is chat page</h1>
    <h1>Welcome, {{$store.state.name.name}}</h1>
      <message :message="message" @removeMsg="remove" @edit="edit"/>
      <message-form @createMsg="create"/>
  </div>
</template>

<script>
import Message from "@/components/Message.vue";
import MessageForm from "@/components/MessageForm.vue";

export default{
  components: {Message, MessageForm},
  name: "Chat",
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
      console.log(1)
      this.message = this.message.filter((x) => x.id !== msg.id);
    },
    edit(mess, msg) {
      console.log(mess);
      console.log(msg);
      msg.text = mess;
    },
    // async renderObj() {
    //   await fetch("https://jsonplaceholder.typicode.com/comments")
    //     .then((res) => res.json())
    //     .then((res) => console.log(res))
    //     .catch((e) => console.log(e));
    // },
  },
  // mounted() {
  //   this.renderObj();
  // },
}
</script>
