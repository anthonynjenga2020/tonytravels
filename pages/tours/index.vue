<template>
    <section class="container mx-auto py-12 px-4">
      <h2 class="text-3xl font-bold mb-6">Explore Our Tours</h2>
      
      <div class="space-y-6">
        <div v-for="tour in tours" :key="tour.id" class="bg-white shadow-lg rounded-lg overflow-hidden flex">
          <img :src="tour.image" :alt="tour.title" class="w-1/3 object-cover">
          <div class="p-6 flex-1">
            <h3 class="text-xl font-bold">{{ tour.title }}</h3>
            <p class="text-gray-600 mt-2">Starting from ${{ tour.price }}</p>
            <p class="mt-4 text-gray-700">{{ tour.description }}</p>
            <NuxtLink :to="`/tours/${tour.id}`" class="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              View Details
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const tours = ref([
    { id: 1, title: 'Safari Adventure', image: '/img/4.jpg', price: 500, description: 'Experience the wild like never before.' },
    { id: 2, title: 'Mountain Trekking', image: '/img/5.jpg', price: 750, description: 'Climb the tallest peaks and enjoy breathtaking views.' },
    { id: 3, title: 'Beach Escape', image: '/img/6.jpg', price: 600, description: 'Relax on sandy beaches and soak in the sun.' }
  ]);
  </script>
  