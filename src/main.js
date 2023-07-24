import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { initializeApp } from "firebase/app";
import VueMobileDetection from "vue-mobile-detection";

const firebaseConfig = {
  apiKey: "AIzaSyDuBd9valC48mipiqFV6J2RrdKJ-q0SxlY",
  authDomain: "for-dly.firebaseapp.com",
  projectId: "for-dly",
  storageBucket: "for-dly.appspot.com",
  messagingSenderId: "694303056729",
  appId: "1:694303056729:web:7327d77042efa2e3fb6248",
};

initializeApp(firebaseConfig);

createApp(App).use(store).use(router).use(VueMobileDetection).mount("#app");
