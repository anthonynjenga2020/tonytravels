<template>
    <Teleport to="body">
      <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-white p-6 rounded-lg w-full max-w-md">
          <h2 class="text-2xl font-bold mb-4">{{ isSignup ? 'Sign Up' : 'Login' }}</h2>
  
          <form @submit.prevent="handleSubmit" class="space-y-4">
            <div>
              <label class="block font-medium">Email</label>
              <input type="email" v-model="form.email" required class="w-full p-3 border rounded-lg outline-none">
            </div>
            <div>
              <label class="block font-medium">Password</label>
              <input type="password" v-model="form.password" required class="w-full p-3 border rounded-lg outline-none">
            </div>
            <button type="submit" class="w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
              {{ isSignup ? 'Sign Up' : 'Login' }}
            </button>
          </form>
  
          <p class="mt-4 text-sm text-center">
            {{ isSignup ? 'Already have an account?' : "Don't have an account?" }}
            <span 
              class="text-blue-500 cursor-pointer" 
              @click="isSignup = !isSignup"
            >
              {{ isSignup ? 'Login' : 'Sign Up' }}
            </span>
          </p>
  
          <button 
            class="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            @click="$emit('close')"
          >
            ✕
          </button>
        </div>
      </div>
    </Teleport>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useAuthStore } from '~/stores/auth'
  
  const props = defineProps({
    isOpen: Boolean
  })
  
  const emit = defineEmits(['close', 'submit'])
  
  const authStore = useAuthStore()
  
  const form = ref({
    email: '',
    password: ''
  })
  
  const isSignup = ref(false)
  
  const handleSubmit = async () => {
    try {
      if (isSignup.value) {
        await authStore.signup(form.value.email, form.value.password)
        alert('Signup successful!')
      } else {
        await authStore.login(form.value.email, form.value.password)
        alert('Login successful!')
      }
      emit('submit', form.value)
      emit('close')
    } catch (error) {
      alert(error.message)
    }
  }
  </script>
  