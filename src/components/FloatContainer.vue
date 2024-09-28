<template>
  <div :style="style">
    <slot v-bind="metadata.attrs" />
  </div>
</template>

<script setup lang="ts">
import type { StyleValue } from "vue";

let rect = reactive(useElementBounding(proxyEl));

const style = computed((): StyleValue => {
  return {
    transition: 'all .5s ease-in-out',
    position: "fixed",
    top: `${rect?.top ?? 0}px`,
    left: `${rect?.left ?? 0}px`,
  };
});
</script>
