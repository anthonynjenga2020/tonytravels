import { defineStore } from 'pinia'
import { ref } from 'vue'
import { auth } from '~/plugins/firebase'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)

  // LOGIN FUNCTION
  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      user.value = userCredential.user
    } catch (error) {
      console.error('Login error:', error.message)
      throw error
    }
  }

  // SIGNUP FUNCTION
  const signup = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      user.value = userCredential.user
    } catch (error) {
      console.error('Signup error:', error.message)
      throw error
    }
  }

  // LOGOUT FUNCTION
  const logout = async () => {
    try {
      await signOut(auth)
      user.value = null
    } catch (error) {
      console.error('Logout error:', error.message)
      throw error
    }
  }

  return { user, login, signup, logout }
})
