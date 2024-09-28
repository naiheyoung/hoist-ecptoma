<template>
  <div overflow-hidden transition-all @click="mark = !mark">
    <img v-if="mark" src="https://images.pexels.com/photos/26843432/pexels-photo-26843432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
    <img v-else src="https://images.pexels.com/photos/26793646/pexels-photo-26793646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
  </div>
</template>

<script setup lang="ts">
const mark = $ref(false)
</script>