import { create } from 'zustand'
import { auth } from 'src/api/firebase.ts'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'
import { FIREBASE_ERRORS } from 'src/constants'
import toast from 'react-hot-toast'
import { IUser } from 'src/types/user.ts'

interface IUserStore {
  user: IUser | null
  setUser: (user: any) => void
  createUser: ({
    email,
    password,
    name,
  }: createUserParams) => Promise<{ success: boolean }>
  login: ({ email, password }: loginParams) => Promise<{ success: boolean }>
  logout: () => Promise<{ success: boolean }>
  onUserStateChange: () => void
}

interface createUserParams {
  email: string
  password: string
  name: string
}

interface loginParams {
  email: string
  password: string
  name: string
}

const useUserStore = create<IUserStore>((set) => ({
  user: null,
  setUser: (user: any) =>
    set(() => ({
      user: user,
    })),
  createUser: async ({ email, password, name }: createUserParams) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      )
      await updateProfile(user, {
        displayName: name,
      })
      localStorage.setItem('uid', JSON.stringify(user.uid))
      set(() => ({
        user: user,
      }))
      return { success: true }
    } catch (error: any) {
      toast.error(FIREBASE_ERRORS[error.code])
      return { success: false }
    }
  },
  login: async ({ email, password }: loginParams) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password)
      localStorage.setItem('uid', JSON.stringify(user.uid))
      set(() => ({
        user: user,
      }))
      return { success: true }
    } catch (error: any) {
      toast.error(FIREBASE_ERRORS[error.code])
      return { success: false }
    }
  },
  logout: async () => {
    try {
      await signOut(auth)
      localStorage.removeItem('uid')
      set(() => ({
        user: null,
      }))
      return { success: true }
    } catch (error: any) {
      toast.error(FIREBASE_ERRORS[error.code])
      return { success: false }
    }
  },
  onUserStateChange: () => {
    onAuthStateChanged(auth, (user) => {
      set(() => ({
        user: user,
      }))
    })
  },
}))

export default useUserStore
