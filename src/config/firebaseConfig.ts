// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth' // New import

const firebaseConfig = {
  apiKey: 'AIzaSyBE6x_YWqDBaxEo4LP_DIAYg6Pub2Y7WC8',
  authDomain: 'social-app-8a069.firebaseapp.com',
  databaseURL: 'https://social-app-8a069-default-rtdb.firebaseio.com',
  projectId: 'social-app-8a069',
  storageBucket: 'social-app-8a069.appspot.com',
  messagingSenderId: '29854423744',
  appId: '1:29854423744:web:30adfc8d63495a4f522b25',
  measurementId: 'G-JHSKRW4F57',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
