<template>
  <div ref="el">
    <slot />
  </div>
</template>

<script setup lang="ts">
const attrs = useAttrs();
metadata.attrs = attrs;

const el = useTemplateRef('el')

onMounted(() => {
  proxyEl.value = el.value
})
</script>
