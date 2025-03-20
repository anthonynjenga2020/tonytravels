<template>
    <div class="container mx-auto px-4 mt-12">
      <h2 class="text-2xl font-bold mb-6">Latest Blog Posts</h2>
  
      <!-- Flexbox Layout for Blogs -->
      <div v-if="blogs.length" class="flex flex-wrap gap-6">
        <BlogCard 
          v-for="blog in blogs" 
          :key="blog.id" 
          :blog="blog" 
          class="w-full sm:w-1/2 lg:w-1/3" 
        />
      </div>
      <p v-else>Loading blogs...</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { collection, getDocs } from 'firebase/firestore'
  import db from '@/plugins/firebase'
  import BlogCard from './BlogCard.vue'
  
  const blogs = ref([])
  
  // Fetch blogs from Firestore
  const fetchBlogs = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'blogs'))
      blogs.value = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
    } catch (error) {
      console.error('Error fetching blogs:', error)
    }
  }
  
  onMounted(fetchBlogs)
  </script>
  