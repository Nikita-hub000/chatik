<template>
  <div class="messageInChat" v-for="msg in message"  :key="msg.id">
  <div class="messageClient"> 
    <p class="msg__user">{{ msg.name }}</p>
    <div
    class="editedFalse" 
    :class="{'edited': msg.editing}">
    <input placeholder="Edit" v-model="mess.edit"  />
    <button @click="$emit('edit', this.mess.edit, msg); this.mess.edit = ''; msg.editing = false;">Редактировать</button>
    </div>
    <p class="msg__text">{{ msg.text }}</p>
    <p class="msg__date">{{ msg.date }}</p>
    <button @click="$emit('removeMsg', msg)">Удалить</button>
    <button @click="msg.editing = true;">{{msg.editing ? 'Отмена' : 'Редактировать'}}</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: Array,
  },
  data(){

  return {
    mess: {
      edit: '',
      
      
    }
  }
},
methods:{
    editBtn(){
        console.log(this)
        this.$emit('edit', this.mess.edit, this.msg)
    },
    logger(){
        console.log(this.message)
    }

},
computed: {
    // active(){
    //     return message[this.id].
    // }
}
};
</script>

<style scoped>
.editedFalse{
    display: none;
}
.edited{
    display: flex;
}
.msg__edit{
    display: none;
}



</style>
