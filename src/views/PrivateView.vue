<template>
  <div>
    <h1>Private View</h1>
    <h1>{{ nav }}</h1>
    <button ref="btn" :style="styleYes" @mouseover="handleHover()">Có</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    nav: window.navigator.userAgent,
    styleYes: {
      position: "absolute",
      top: "0",
      left: "0",
    },
    styleNo: {
      position: "absolute",
      top: "0",
      left: "0",
    },
  }),
  methods: {
    handleHover() {
      console.log("dawd");
      this.styleYes.top = `${Math.floor(Math.random() * window.innerHeight)}px`;
      this.styleYes.left = `${Math.floor(Math.random() * window.innerWidth)}px`;
    },
  },
};
</script>

<style>
#btn {
  position: absolute;
}
</style>
