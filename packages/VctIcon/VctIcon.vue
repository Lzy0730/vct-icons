<template>
  <i
    @click="$emit('click')"
    :class="iconClass"
    v-if="!isCustomSvg"
    class="vct-icon"
    style="font-size: 24px"
  ></i>
  <svg v-else @click="$emit('click')">
    <use :xlink:href="`#${icon}`"></use>
  </svg>
</template>

<script>
export default {
  name: "VctIcon",
  props: {
    size: {
      type: String,
      default: "1x",
      require: true,
    },
    icon: {
      type: String,
      require: true,
    },
    isCustomSvg: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    iconClass() {
      return `ri-${this.icon} ri-${this.size}`;
    },
  },
};
</script>

<style scoped>
@import url("./fonts/remixicon.css");
</style>
