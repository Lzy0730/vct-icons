<template>
  <div id="app">
    <vct-icon icon="admin-line" @click="test" />
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    test() {
      alert("vct-icon");
    },
  },
};
</script>

<style></style>
