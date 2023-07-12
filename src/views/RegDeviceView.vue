<template>
  <div>Register Device {{ key }}</div>
</template>

<script>
export default {
  computed: {
    key() {
      return this.$route.params.key;
    },
  },
};
</script>

<style></style>
