<template>
  <div flex="~ col" items-center>
    <div>Details</div>
    <div>
      <router-link btn to="/">Back</router-link>
      <router-link btn to="/bar">Bar</router-link>
    </div>
    <div m10 flex="~ <sm:col" gap4 items-center>
      <TheImageProxy w40 h40 rounded-full />
      <p flex-1>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TheImageProxy } from '~/composables'
</script>