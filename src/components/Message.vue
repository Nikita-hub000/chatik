<template>
  <transition-group name="list">
    <div class="messageInChat" v-for="msg in message" :key="msg.id">
      <div
        class="messageClient"
        :class="{ messageMy: msg.name === $store.state.name.name }"
      >
        <p class="msg__user">{{ msg.name }}</p>
        <div class="editedFalse" :class="{ edited: msg.editing }">
          <input placeholder="Edit" v-model="mess.edit" />
          <button
            @click="
              $emit('edit', this.mess.edit, msg);
              this.mess.edit = '';
              msg.editing = false;
            "
          >
            Редактировать
          </button>
        </div>
        <p class="msg__text">{{ msg.text }}</p>
        <p class="msg__date">{{ msg.date }}</p>
        <div v-if="msg.name === $store.state.name.name">
        <button @click="$emit('removeMsg', msg)">Удалить</button>
        <button @click="msg.editing = true">
          {{ msg.editing ? "Отмена" : "Редактировать" }}
        </button>
        </div>
      </div>
    </div>
  </transition-group>
</template>

<script>
export default {
  props: {
    message: Array,
  },
  data() {
    return {
      mess: {
        edit: "",
      },
    };
  },
  methods: {
    editBtn() {
      console.log(this);
      this.$emit("edit", this.mess.edit, this.msg);
    },
    logger() {
      console.log(this.message);
    },
  },
  computed: {
    // active(){
    //     return message[this.id].
    // }
  },
};
</script>

<style scoped>
.editedFalse {
  display: none;
}
.edited {
  display: flex;
}
.msg__edit {
  display: none;
}

.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
