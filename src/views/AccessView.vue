<template>
  <div>
    <h1>Nhập mã truy cập</h1>
    <h1><input v-model="pass" class="inp" type="text" /></h1>
    <button class="button-x" id="btn" @click="handle(pass)">Xác Nhận</button>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { getAuth } from "firebase/auth";
export default {
  computed: mapState(["key"]),
  data() {
    return {
      pass: "",
    };
  },
  methods: {
    handle(pass) {
      if (pass == "4DLY") {
        this.$router.push(`/u/${this.key}`);
      }
    },
  },
  beforeMount() {
    const auth = getAuth();
    if (this.key != window.localStorage.getItem("dly-key")) {
      auth.signOut().then(() => {
        alert("Đăng nhập đúng email nào bạn...");
        window.location.reload();
      });
    }
  },
};
</script>

<style scoped>
.inp {
  font-size: large;
  border-radius: 25px;
  padding: 8px 20px;
  font-family: Circular, Helvetica, sans-serif;
  font-weight: 700;
  text-align: center;
  color: #2c3e50;
  transform: scale(1);
  box-shadow: 0;
  transition: 0.5s;
}

.inp:focus {
  transform: scale(1.075);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
.inp:hover {
  transform: scale(1.005);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 5px 20px 0px;
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
