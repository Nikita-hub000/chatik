<template>
  <div id="nav">
    <router-link  to="/">Home</router-link> |
    <router-link :class="{disabled: $store.state.isEnter}" to="/about">Chat</router-link>
  </div>
  <router-view />
</template>
 <script>
 
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
  float: right;
  padding: 5px;
}
.messageMy{
  background: teal;
  float: left;
  
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

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.disabled {
    opacity: 0.5;
    pointer-events: none;
}
</style>
