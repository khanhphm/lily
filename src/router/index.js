import { createRouter, createWebHistory } from "vue-router";
import MainView from "../views/MainView.vue";
import PrivateView from "../views/PrivateView.vue";
import RegDeviceView from "../views/RegDeviceView.vue";
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithRedirect,
} from "firebase/auth";

const routes = [
  {
    path: "/",
    name: "home",
    component: MainView,
  },
  {
    path: "/private",
    name: "private",
    component: PrivateView,
    beforeEnter: (to, from, next) => {
      const key = window.localStorage.getItem("dly-key");

      if (key == null) {
        next({ name: "home" }); //đá về trang đăng ký thiết bị
      } else {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        onAuthStateChanged(auth, (user) => {
          if (user) {
            next();
          } else {
            signInWithRedirect(auth, provider);
          }
        });
      }
    },
  },
  {
    path: "/reg-device/:key",
    name: "reg-device",
    component: RegDeviceView,
    beforeEnter: (to, from, next) => {
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
