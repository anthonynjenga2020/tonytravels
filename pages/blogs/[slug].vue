<template>
    <div class="container mx-auto px-4 py-8">
      <div v-if="blog" class="max-w-3xl mx-auto">
        <nuxt-img :src="blog.image" alt="Blog image" class="w-full h-64 object-cover rounded-lg mb-6" />
        <h1 class="text-4xl font-bold mb-4">{{ blog.title }}</h1>
        <p class="text-gray-500 text-sm mb-6">
          By {{ blog.author }} · {{ formatDate(blog.date) }}
        </p>
        <div class="prose max-w-none" v-html="blog.content"></div>
      </div>
  
      <div v-else>
        <p>Loading blog post...</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import { doc, getDoc } from 'firebase/firestore'
  import  db   from '~/plugins/firebase'
  
  const route = useRoute()
  const blog = ref(null)
  
  const fetchBlog = async () => {
    try {
      const docRef = doc(db, 'blogs', route.params.slug)
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        blog.value = docSnap.data()
      } else {
        console.error('Blog not found')
      }
    } catch (error) {
      console.error('Error fetching blog:', error)
    }
  }
  
  const formatDate = (timestamp) => {
    if (!timestamp) return ''
    const date = timestamp.toDate()
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }
  
  onMounted(fetchBlog)
  </script>
  