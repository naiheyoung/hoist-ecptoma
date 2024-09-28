<template>
  <main font-sans p="x-4 y-10" text="center gray-700 dark:gray-200">
    <RouterView />
  </main>
  <TheImageContainer />
</template>

<script setup lang="ts">
import { TheImageContainer } from "~/composables";
</script>
