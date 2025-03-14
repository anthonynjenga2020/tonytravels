<template>
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-6">Latest Blogs</h1>
      
      <div v-if="blogs.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="blog in blogs" :key="blog.slug" class="bg-white shadow-lg rounded-lg overflow-hidden">
          <NuxtLink :to="`/blogs/${blog.slug}`">
            <nuxt-img :src="blog.image" alt="Blog image" class="w-full h-48 object-cover" />
          </NuxtLink>
          <div class="p-4">
            <NuxtLink :to="`/blogs/${blog.slug}`" class="text-xl font-semibold hover:text-blue-500">
              {{ blog.title }}
            </NuxtLink>
            <p class="text-gray-500 text-sm mt-1">By {{ blog.author }} · {{ formatDate(blog.date) }}</p>
          </div>
        </div>
      </div>
  
      <div v-else>
        <p>No blogs found.</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { collection, getDocs } from 'firebase/firestore'
  import  db  from '~/plugins/firebase'
  
  const blogs = ref([])
  
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
  
  const formatDate = (timestamp) => {
    if (!timestamp) return ''
    const date = timestamp.toDate()
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }
  
  onMounted(fetchBlogs)
  </script>
  
  