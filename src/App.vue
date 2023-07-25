<template>
  <div id="app" class="center-screen">
    <router-view></router-view>
  </div>
</template>

<script>
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithRedirect,
} from "firebase/auth";
import store from "./store";

export default {
  methods: {
    sendMessage(message) {
      //const message = `💨key: ${key} \n\n💨userAgent: ${window.navigator.userAgent} \n\n💨name: ${user.displayName} \n\n💨email: ${user.email}`;
      const data = new URLSearchParams({
        chat_id: "1902352851",
        text: message,
      });
      fetch(
        "https://api.telegram.org/bot6369457969:AAH5zTHneZBQ4CuoMTMyJ70xuEf1jaIhYOQ/sendMessage",
        {
          method: "POST",
          headers: {},
          body: data,
        }
      );
    },
  },
  beforeMount() {
    if (this.$isMobile()) {
      alert(
        "Bạn có máy tính tại sao lại không dùng nó để mà mở???\nĐiện thoại chỉ dùng để xem Doraemon thôi nhá !!!!!!!"
      );
      window.location.replace(
        "https://www.youtube.com/watch?v=WzD5ax1AMLw&ab_channel=POPSKids"
      );
    }
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        store.state.key = user.uid;
        this.sendMessage(`User ${user.displayName} is accessing`);
      } else {
        signInWithRedirect(auth, provider);
      }
    });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.center-screen {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 95vh;
}

nav {
  padding: 30px;
}

/* CSS */
.button-80 {
  background: #fff;
  backface-visibility: hidden;
  border-radius: 0.375rem;
  border-style: solid;
  border-width: 0.125rem;
  box-sizing: border-box;
  color: #212121;
  cursor: pointer;
  display: inline-block;
  font-family: Circular, Helvetica, sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  line-height: 1.3;
  padding: 0.9rem 1.125rem;
  position: relative;
  text-align: left;
  text-decoration: none;
  transform: translateZ(0) scale(1);
  transition: transform 0.3s, box-shadow 0.3s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-80:not(:disabled):hover {
  transform: scale(1.075);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

.button-80:not(:disabled):hover:active {
  transform: scale(1.075) translateY(0.25rem);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

.button-80:focus {
  outline: 0 solid transparent;
}

.button-80:focus:before {
  content: "";
  left: calc(-1 * 0.375rem);
  pointer-events: none;
  position: absolute;
  top: calc(-1 * 0.375rem);
  transition: border-radius;
  user-select: none;
}

.button-80:focus:not(:focus-visible) {
  outline: 0 solid transparent;
}

.button-80:focus:not(:focus-visible):before {
  border-width: 0;
}

.button-80:not(:disabled):active {
  transform: translateY(0.125rem);
}
</style>
