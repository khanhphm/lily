<template>
  <button v-if="!start" class="button-x" @click="handleStart()">Bắt đầu</button>
  <div v-if="start">
    <StatusView0 v-if="status == 0" @yes="(e) => handleYes(e)" />
    <StatusView1 v-if="status == 1" />
    <StatusView2 v-if="status == 2" :signal="signal" />
  </div>
</template>

<script>
import StatusView0 from "../components/StatusView0.vue";
import StatusView1 from "../components/StatusView1.vue";
import StatusView2 from "../components/StatusView2.vue";
import Music from "../assets/background_music.mp3";

const bg_music = new Audio(Music);
export default {
  components: { StatusView0, StatusView1, StatusView2 },
  data: () => ({
    status: 0,
    start: false,
    signal: 0,
    nav: window.navigator.userAgent,
  }),
  mounted() {
    document.addEventListener("mousemove", (event) => {
      this.mouseX = event.clientX;
      this.mouseY = event.clientY;
    });
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

    handleStart() {
      this.start = true;
      //console.log(this.$refs);
    },
    handleYes(e) {
      console.log(e);
      bg_music.play();
      this.signal = e.signal;
      if (e.signal <= 5 || e.signal > 10) {
        this.status = 1;
      } else {
        this.status = 2;
      }
    },
  },
};
</script>

<style scoped>
#head {
  position: absolute;
  top: 30vh;
  left: 50%;
  transform: translate(-50%, -50%);
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
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  line-height: 1.3;
  padding: 0.9rem 1.125rem;
  position: relative;
  text-align: left;
  text-decoration: none;
  transform: translateZ(0) scale(1) translate(-50%, -50%);
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  transition: 0.3s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-x:not(:disabled):hover {
  transform: translateZ(0) scale(1.075) translate(-50%, -50%);
  box-shadow: rgba(0, 0, 0, 0.4) 0px 12px 14px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}

.button-x:not(:disabled):hover:active {
  transform: scale(1.075) translateY(0.25rem) translate(-50%, -50%);
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
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
