<template>
  <p class="register__text">Register</p>
  <form @submit.prevent class="register">
    <input class="register__input" v-model="user.name" placeholder="Name" />
    <input class="register__input" v-model="user.password" placeholder="Password" />
    <button class="register__btn">Войти</button>
    <button class="register__btn">Еще нет аккаунта? Зарегистрироваться</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "",
        password: "",
      },
      users: [
        {
          id: 1,
          name: "Vitya",
          password: "12345",
        },
        {
          id: 2,
          name: "Kolya",
          password: "12345",
        },
        {
          id: 3,
          name: "Andrey",
          password: "12345",
        },
        {
          id: 4,
          name: "Vitya",
          password: "12345",
        },
        {
          id: 5,
          name: "Kolya",
          password: "12345",
        },
        {
          id: 6,
          name: "Andrey",
          password: "12345",
        },
        {
          id: 7,
          name: "Vitya",
          password: "12345",
        },
        {
          id: 8,
          name: "Kolya",
          password: "12345",
        },
        {
          id: 9,
          name: "Andrey",
          password: "12345",
        },
      ],
    };
  },

};
</script>

<style></style>
