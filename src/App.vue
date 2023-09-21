<script setup>
import { RouterLink, RouterView } from 'vue-router'

import shareData from '@/data.json'

//console.log(shareData.destinations);
const menuItems = shareData.destinations;

</script>

<template>
  <header>
    <div class="max-w-7xl mx-auto py-5 text-center flex flex-row justfiy-item-center">
      <nav class=" mx-auto py-5  ">
        <RouterLink to="/" class="px-4">Home</RouterLink>
        <RouterLink to="/about" class="px-4">About</RouterLink>
        <RouterLink to="/contact" class="px-4">Contact</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />

</template>

<style scoped>
  .active{
    color: rgb(30, 88, 232);
  }
</style>