<template>
  <div>
    <h1>Private View</h1>
    <h1>{{ nav }}</h1>
  </div>
</template>

<script>
export default {
  data: () => ({
    nav: window.navigator.userAgent,
  }),
  methods: {},
};
</script>

<style></style>
