<template>
    <div class="bg-white shadow-md rounded-lg overflow-hidden">
      <NuxtLink :to="`/blog/${blog.id}`">
        <img 
          :src="blog.image" 
          :alt="blog.title" 
          class="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
        />
      </NuxtLink>
      <div class="p-4">
        <NuxtLink :to="`/blog/${blog.id}`">
          <h2 class="text-lg font-bold hover:text-blue-500">{{ blog.title }}</h2>
        </NuxtLink>
        <p class="text-gray-600 mt-2">{{ formatDate(blog.date) }}</p>
        <p class="text-gray-700 mt-2 line-clamp-3">{{ blog.excerpt }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    blog: {
      type: Object,
      required: true
    }
  })
  
  const formatDate = (timestamp) => {
    if (!timestamp) return ''
    const date = timestamp.toDate()
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }
  </script>
  