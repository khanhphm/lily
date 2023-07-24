<template>
  <div>
    <h1>Opps...Nothing here...</h1>
    <p>{{ key }}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState([
    // map this.count to store.state.count
    "key",
  ]),
};
</script>
<style scoped></style>
