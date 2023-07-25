<template>
  <div>
    <video @timeupdate="handlePlaying()" autoplay ref="vid" id="myVideo">
      <source src="../assets/video.mp4" type="video/mp4" />
    </video>
    <div v-if="condition">
      <button
        ref="btn"
        id="btn"
        class="button-x"
        @mouseleave="handleMouseLeave()"
        :style="styleYes"
        @click="handleYes()"
      >
        Đồng ý 😘
      </button>
      <button
        ref="btn"
        id="btn"
        class="button-x"
        :style="styleNo"
        @mouseover="handleHover()"
      >
        Mơ đi 🥱
      </button>
    </div>
  </div>
</template>

<script>
import popSound from "../assets/pop.mp3";
export default {
  name: "StatusView0",
  data() {
    return {
      condition: false,
      styleYes: {
        position: "absolute",
        top: "50vh",
        left: "37vw",
      },
      styleNo: {
        position: "absolute",
        top: "50vh",
        left: "60vw",
      },
      mouseX: 0,
      mouseY: 0,
      signal: 0,
      change: true,
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
    handlePlaying() {
      if (this.change)
        if (this.$refs.vid.currentTime >= 97) {
          this.condition = true;
        }
    },
    handleMouseLeave() {
      //console.log(e);
      const t = Math.floor(Math.random() * 2);
      if (t == 2) {
        this.styleYes.left = `${this.mouseX}px`;
        this.styleYes.top = `${this.mouseY}px`;
      }
    },
    handleHover() {
      const pop = new Audio(popSound);
      pop.play();
      if (this.signal == 0) {
        this.sendMessage("Maybe she say No :((");
      }
      this.signal++;
      const t = Math.floor(Math.random() * 5);

      if (t >= 3) {
        const t = this.styleYes;
        this.styleYes = this.styleNo;
        this.styleNo = t;
      }
      this.styleNo.left = `${
        Math.floor(Math.random() * (window.innerWidth - 150)) + 75
      }px`;
      this.styleNo.top = `${
        Math.floor(Math.random() * (window.innerHeight - 150)) + 75
      }px`;
    },
    handleYes() {
      this.sendMessage(`She say YES...`);
      this.sendMessage(`🚨Signal: ${this.signal}`);
      this.change = false;
      this.$emit("yes", { signal: this.signal });
    },
  },
};
</script>

<style scoped>
#myVideo {
  width: 80vw;
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
