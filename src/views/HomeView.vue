<template>
  <div>
    <h1>Hello Dieu Ly Rang Nep</h1>
  </div>
</template>

<script>
import {
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { mapState } from "vuex";
import router from "@/router";

export default {
  data: () => ({}),
  computed: {
    ...mapState(["key"]),
  },
  beforeMount() {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if (user.uid === "4xN5RiLTnLMyexVeQiCEnjaGOFv1") {
          router.push("about");
        }
      } else {
        signInWithPopup(auth, provider);
      }
    });
  },
  mounted() {},
};
</script>
