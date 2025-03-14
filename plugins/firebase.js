import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDyPjCddO9HI-Jc8jDHUAVqRQlSPla7a1Y",
  authDomain: "tonytravels-12cd3.firebaseapp.com",
  projectId: "tonytravels-12cd3",
  storageBucket: "tonytravels-12cd3.appspot.com",
  messagingSenderId: "368781889519",
  appId: "1:368781889519:web:ed2dfed369e64490fcf01a"
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

// Export Firestore and Auth
export const db = getFirestore(firebaseApp)
// export const auth = getAuth(firebaseApp)
