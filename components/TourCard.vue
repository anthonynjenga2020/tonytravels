<template>
  <div class="bg-white shadow-md rounded-lg overflow-hidden">
    <NuxtLink :to="`/tours/${tour.id}`">
    <img :src="tour.image" :alt="tour.title" class="w-full h-48 object-cover transition-transform duration-300 hover:scale-105">
    </NuxtLink>
    <div class="p-4"> <NuxtLink :to="`/tours/${tour.id}`">
      <h2 class="text-xl font-bold hover:blue">{{ tour.title }}</h2></NuxtLink>
      <p class="text-gray-600">{{ tour.location }}</p>
      <p class="text-gray-700 mt-2">{{ tour.description }}</p>
      <div class="flex justify-between items-center mt-4">
        <span class="text-lg font-bold">${{ tour.price }}</span>
        <span class="text-sm text-yellow-500">{{ tour.rating }} ⭐</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  tour: {
    type: Object,
    required: true
  }
})
</script>
