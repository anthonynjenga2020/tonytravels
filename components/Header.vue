<template>
    <header class="bg-white shadow-md p-4 fixed w-full top-0 z-50">
      <div class="container mx-auto flex justify-between items-center">
        <NuxtLink to="/" class="text-xl font-bold">TravelSite</NuxtLink>
        <nav>
          <ul class="flex space-x-6">
            <li><NuxtLink to="/tours" class="hover:text-blue-500">Tours</NuxtLink></li>
            <li><NuxtLink to="/about" class="hover:text-blue-500">About</NuxtLink></li>
            <li><NuxtLink to="/contact" class="hover:text-blue-500">Contact</NuxtLink></li>
          </ul>
        </nav>
      </div>
    </header>
  </template>
  

<script setup>

</script>

<style lang="scss" scoped>

</style>