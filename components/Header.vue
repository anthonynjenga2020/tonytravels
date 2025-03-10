<template>
  <header class="bg-white shadow-md p-4 fixed w-full top-0 z-50">
    <div class="container mx-auto flex justify-between items-center">
      <!-- LOGO -->
      <NuxtLink to="/" class="text-xl font-bold">TonyTravels</NuxtLink>

      <!-- NAVIGATION -->
      <nav>
        <ul class="flex space-x-6 items-center">
          <li><NuxtLink to="/" class="hover:text-blue-500">Home</NuxtLink></li>
          <li><NuxtLink to="/tours" class="hover:text-blue-500">Tours</NuxtLink></li>
          <li><NuxtLink to="/about" class="hover:text-blue-500">About</NuxtLink></li>
          <li><NuxtLink to="/blogs" class="hover:text-blue-500">Blogs</NuxtLink></li>
          <li><NuxtLink to="/contact" class="hover:text-blue-500">Contact</NuxtLink></li>
          
          <!-- CURRENCY CONVERTER -->
          <li>
            <div class="flex items-center space-x-2 border px-3 py-1 rounded-lg cursor-pointer" @click="toggleCurrency">
              <span class="text-gray-600">{{ currency }}</span>
              <Icon name="uil:exchange-alt" class="text-lg text-gray-500" />
            </div>
          </li>

          <!-- LOGIN/SIGNUP BUTTON -->
          <li>
            <Icon 
              name="uil:user" 
              class="text-xl cursor-pointer text-gray-600 hover:text-blue-500" 
              @click="showModal = true"
            />
          </li>
        </ul>
      </nav>
    </div>

    <!-- LOGIN/SIGNUP MODAL -->
    <LoginSignupModal 
      :isOpen="showModal" 
      @close="showModal = false" 
      @submit="handleAuth"
    />
  </header>
</template>

<script setup>
import { ref } from 'vue'
import LoginSignupModal from './LoginSignupModal.vue'

// CURRENCY STATE
const currency = ref('USD')

const toggleCurrency = () => {
  currency.value = currency.value === 'USD' ? 'KSH' : 'USD'
}

// MODAL STATE
const showModal = ref(false)

const handleAuth = (formData) => {
  console.log('Auth Data:', formData)
  showModal.value = false
}
</script>
