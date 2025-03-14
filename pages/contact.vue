<template>
    <div>
      <!-- Hero Section -->
      <section class="relative w-full h-[400px]">
        <nuxt-img src="/img/11.jpg" alt="Contact Hero" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 class="text-white text-5xl font-bold">Contact Us</h1>
        </div>
      </section>
  
      <!-- Contact Form Section -->
      <section class="container mx-auto px-4 py-16">
        <div class="grid md:grid-cols-2 gap-12">
          <!-- Left Side: Contact Information -->
          <div>
            <h2 class="text-3xl font-bold mb-6">Get in Touch</h2>
            <p class="text-gray-700 leading-relaxed mb-4">
              If you have any questions, feel free to contact us. We’re here to help you plan your next adventure!
            </p>
  
            <div class="space-y-4">
              <div class="flex items-center">
                <Icon name="uil:phone" class="text-blue-500 w-6 h-6 mr-3" />
                <span class="text-gray-700">+254 712 345 678</span>
              </div>
  
              <div class="flex items-center">
                <Icon name="uil:envelope" class="text-blue-500 w-6 h-6 mr-3" />
                <span class="text-gray-700">info@tonytravels.com</span>
              </div>
  
              <div class="flex items-center">
                <Icon name="uil:map-marker" class="text-blue-500 w-6 h-6 mr-3" />
                <span class="text-gray-700">123 Nairobi Street, Kenya</span>
              </div>
            </div>
          </div>
  
          <!-- Right Side: Contact Form -->
          <div class="bg-white shadow-lg rounded-lg p-8">
            <form @submit.prevent="submitForm" class="space-y-4">
              <div>
                <label class="block font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  v-model="form.name"
                  required
                  class="w-full p-3 border rounded-lg outline-none"
                  placeholder="Enter your full name"
                />
              </div>
  
              <div>
                <label class="block font-medium mb-2">Email</label>
                <input
                  type="email"
                  v-model="form.email"
                  required
                  class="w-full p-3 border rounded-lg outline-none"
                  placeholder="Enter your email"
                />
              </div>
  
              <div>
                <label class="block font-medium mb-2">Message</label>
                <textarea
                  v-model="form.message"
                  required
                  class="w-full p-3 border rounded-lg outline-none h-32 resize-none"
                  placeholder="Write your message here"
                ></textarea>
              </div>
  
              <button
                type="submit"
                class="w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { collection, addDoc } from 'firebase/firestore'
  import  db  from '~/plugins/firebase'
  
  const form = ref({
    name: '',
    email: '',
    message: ''
  })
  
  const submitForm = async () => {
    try {
      if (!form.value.name || !form.value.email || !form.value.message) {
        alert('Please fill in all fields.')
        return
      }
  
      await addDoc(collection(db, 'contacts'), form.value)
      alert('Message sent successfully!')
  
      // Reset form
      form.value = {
        name: '',
        email: '',
        message: ''
      }
    } catch (error) {
      console.error('Error sending message:', error)
      alert('Failed to send message. Try again!')
    }
  }
  </script>
  