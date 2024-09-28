<template>
  <div>
    <div>Index</div>
    <div>
      <router-link btn to="/details">Go</router-link>
    </div>
    <TheImageProxy w50 h50 rounded-xl />
  </div>
</template>

<script setup lang="ts">
import { TheImageProxy } from "~/composables";
</script>
