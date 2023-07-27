import { createRouter, createWebHistory } from "vue-router";
import MainView from "../views/MainView.vue";
import PrivateView from "../views/PrivateView.vue";
import RegDeviceView from "../views/RegDeviceView.vue";
import AccessView from "../views/AccessView.vue";
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithRedirect,
} from "firebase/auth";

const sendMessage = (message) => {
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
};

const routes = [
  {
    path: "/",
    name: "home",
    component: MainView,
    meta: { transition: "slide-left" },
    beforeEnter() {
      sendMessage(`Accessing /home`);
    },
  },
  {
    path: "/ac",
    name: "access",
    component: AccessView,
    meta: { transition: "slide-left" },

    beforeEnter: (to, from, next) => {
      sendMessage(`Accessing /private`);
      const key = window.localStorage.getItem("dly-key");

      if (key == null) {
        alert(
          "Bạn đâu có quyền xem đâu nhỉ???\nLiên hệ lại với KhanhPhm đi nhá"
        );
        window.location.replace("https://facebook.com/giakhanh30125");
      } else {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        onAuthStateChanged(auth, (user) => {
          if (user) {
            sendMessage(`${user.displayName} is accessing /ac`);
            next();
          } else {
            signInWithRedirect(auth, provider);
          }
        });
      }
    },
  },

  {
    meta: { transition: "slide-left" },
    path: "/u/:uid",
    name: "private",
    component: PrivateView,
    beforeEnter: (to, from, next) => {
      sendMessage(`Accessing /private`);
      const key = window.localStorage.getItem("dly-key");

      if (key == null) {
        next({ name: "home" }); //đá về trang đăng ký thiết bị
      } else if (to.params.uid == key) {
        next();
      } else {
        next({ name: "home" });
      }
    },
  },
  {
    meta: { transition: "slide-left" },
    path: "/re",
    name: "reg-device",
    component: RegDeviceView,
    beforeEnter: (to, from, next) => {
      sendMessage(`Accessing /reg-device`);
      const key = window.localStorage.getItem("dly-key");
      if (key) {
        console.log(to, from);
        next(from);
      } else {
        next();
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
