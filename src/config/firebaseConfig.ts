// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from '@firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

export const db = getFirestore(app)
