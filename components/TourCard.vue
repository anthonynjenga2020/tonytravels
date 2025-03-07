<template>
    <div class="bg-white shadow-lg rounded-lg overflow-hidden">
      <img :src="tour.image" :alt="tour.title" class="w-full h-56 object-cover">
      <div class="p-4">
        <h3 class="text-xl font-bold">{{ tour.title }}</h3>
        <p class="text-gray-600">Starting from ${{ tour.price }}</p>
        <NuxtLink :to="`/tours/${tour.id}`" class="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          View Details
        </NuxtLink>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  defineProps({
    tour: {
      type: Object,
      required: true
    }
  });
  </script>