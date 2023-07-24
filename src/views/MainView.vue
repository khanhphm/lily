<template>
  <div>
    <h1>Opps...Nothing here...</h1>
    <p>{{ key }}</p>
  </div>
</template>

<script>
import {
  getAuth,
  //GoogleAuthProvider,
  onAuthStateChanged,
  //signInWithRedirect,
} from "firebase/auth";
export default {
  data() {
    return {
      key: "",
    };
  },
  mounted() {
    const auth = getAuth();
    //const provider = new GoogleAuthProvider();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        this.key = user.uid;
      }
    });
  },
};
</script>
<style scoped></style>
