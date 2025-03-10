import { initializeApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDyPjCddO9HI-Jc8jDHUAVqRQlSPla7a1Y",
  authDomain: "tonytravels-12cd3.firebaseapp.com",
  projectId: "tonytravels-12cd3",
  storageBucket: "tonytravels-12cd3.appspot.com",
  messagingSenderId: "368781889519",
  appId: "1:368781889519:web:ed2dfed369e64490fcf01a"
}

// ✅ Check if Firebase is already initialized to avoid duplication
const firebaseApp = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0]

const db = getFirestore(firebaseApp)

export default db
