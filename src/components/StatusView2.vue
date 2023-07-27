<template>
  <div v-if="show">
    <h1>
      Sao phải tìm đến cái nút từ chối tận {{ signal }} lần thế? <br />
      Muốn nói gì với t không? 👇👇
    </h1>
    <h1><textarea cols="50" rows="8" v-model="text" class="inp" type="" /></h1>
    <button
      class="button-x"
      id="btn"
      @click="
        () => {
          sendMessage(`📩📩📩Her message: \n ${text}`);
          show = false;
        }
      "
    >
      Gửi cho Khánh 📩
    </button>
  </div>
  <div v-if="!show">
    <h1>Cảm ơn bạn Ly đã mở và xem hết gói quà nhỏ này!! <br /></h1>
  </div>
</template>

<script>
export default {
  props: ["signal"],
  data() {
    return {
      text: "",
      show: true,
    };
  },
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
  mounted() {
    this.sendMessage("🔔🔔Notis: \n -She's on Status 2 Page...");
  },
};
</script>

<style scoped>
.inp {
  text-align: justify;
  font-size: 0.75rem;
  border-radius: 25px;
  padding: 8px 20px;
  font-family: Circular, Helvetica, sans-serif;
  font-weight: 700;
  color: #2c3e50;
  transform: scale(1);
  box-shadow: 0;
  transition: 0.5s;
}

.inp:focus {
  transform: scale(1.075);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.button-x {
  background: #fff;
  backface-visibility: hidden;
  border-radius: 1rem;
  border-style: solid;
  border-width: 0.125rem;
  box-sizing: border-box;
  color: #212121;
  cursor: pointer;
  display: inline-block;
  font-family: Circular, Helvetica, sans-serif;
  font-size: 0.75rem;
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

.button-x:not(:disabled):hover {
  transform: scale(1.075);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

.button-x:not(:disabled):hover:active {
  transform: scale(1.075) translateY(0.25rem);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

.button-x:focus {
  outline: 0 solid transparent;
}

.button-x:focus:before {
  content: "";
  left: calc(-1 * 0.375rem);
  pointer-events: none;
  position: absolute;
  top: calc(-1 * 0.375rem);
  transition: border-radius;
  user-select: none;
}

.button-x:focus:not(:focus-visible) {
  outline: 0 solid transparent;
}

.button-x:focus:not(:focus-visible):before {
  border-width: 0;
}

.button-x:not(:disabled):active {
  transform: translateY(0.125rem);
}
</style>
