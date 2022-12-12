<template>
  <div class="vct-icon" style="font-size: 24px">
    <i :class="iconClass" v-if="!isCustomIcon"></i>
    <svg v-else>
      <use :xlink:href="`#${icon}`"></use>
    </svg>
  </div>
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
