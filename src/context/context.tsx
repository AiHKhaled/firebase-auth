import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateEmail,
  updatePassword,
  User,
  UserCredential,
} from 'firebase/auth'
import { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../config/firebaseConfig'

type AuthType = {
  currentUser?: string

  login: (email: string, password: string) => Promise<UserCredential | void>
  signup: (email: string, password: string) => Promise<UserCredential | void>
}

type AuthContextProviderProps = {
  children: React.ReactNode
}

const AuthContext = createContext<any | null>(null)

const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User | null | any>()
  const [loading, setLoading] = useState<boolean>(true)
  function login(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password)
  }

  function signup(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  function signout() {
    return signOut(auth)
  }

  function emailUpdate(newEmail: string) {
    return updateEmail(currentUser, newEmail)
  }

  function passwordUpdate(newPassword: string) {
    return updatePassword(currentUser, newPassword)
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
      setLoading(false)
    })
    return unsubscribe
  }, [])
  const value = {
    currentUser,
    login,
    signup,
    signout,
    emailUpdate,
    passwordUpdate,
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

const useAuthContext = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuthContext must be used within a AuthContextProvider')
  }
  return context
}

export { AuthContextProvider, useAuthContext }
