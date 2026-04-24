<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style>
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
  overflow: hidden;
  background: #111122;
  color: #fff;
  font-family: sans-serif;
}

#app {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>