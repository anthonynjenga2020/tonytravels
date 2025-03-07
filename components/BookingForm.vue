<template>
    <div class="bg-white shadow-lg rounded-lg p-6">
      <h2 class="text-2xl font-bold mb-4">Book This Tour</h2>
      
      <form @submit.prevent="submitBooking" class="space-y-4">
        <div>
          <label class="block font-medium">Full Name</label>
          <input type="text" v-model="form.name" required class="w-full p-3 border rounded-lg outline-none">
        </div>
        
        <div>
          <label class="block font-medium">Email</label>
          <input type="email" v-model="form.email" required class="w-full p-3 border rounded-lg outline-none">
        </div>
        
        <div>
          <label class="block font-medium">Phone Number</label>
          <input type="tel" v-model="form.phone" required class="w-full p-3 border rounded-lg outline-none">
        </div>
        
        <div>
          <label class="block font-medium">Number of Guests</label>
          <input type="number" v-model="form.guests" min="1" required class="w-full p-3 border rounded-lg outline-none">
        </div>
        
        <div>
          <label class="block font-medium">Travel Date</label>
          <input type="date" v-model="form.date" required class="w-full p-3 border rounded-lg outline-none">
        </div>
        
        <button type="submit" class="w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
          Confirm Booking
        </button>
      </form>
    </div>
  </template>
  
  <script setup>
import { ref } from 'vue'
import { collection, addDoc } from 'firebase/firestore'
import  db  from '~/plugins/firebase'

const form = ref({
  name: '',
  email: '',
  phone: '',
  guests: 1,
  date: ''
})

const submitBooking = async () => {
  try {
    await addDoc(collection(db, 'bookings'), form.value)
    alert('Booking Confirmed!')
    
    // Reset form
    form.value = {
      name: '',
      email: '',
      phone: '',
      guests: 1,
      date: ''
    }
  } catch (error) {
    console.error('Error saving booking:', error)
    alert('Failed to confirm booking. Try again!')
  }
}
</script>

  