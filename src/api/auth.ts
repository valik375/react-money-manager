import { auth } from 'src/api/firebase.ts'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from 'firebase/auth'
import { FIREBASE_ERRORS } from 'src/constants'
import toast from 'react-hot-toast'

interface createUserParams {
  email: string
  password: string
  name: string
}

export const createUser = async ({
  email,
  password,
  name,
}: createUserParams) => {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password)
    await updateProfile(user, {
      displayName: name,
    })
    localStorage.setItem('uid', JSON.stringify(user.uid))
    return { success: true }
  } catch (error: any) {
    toast.error(FIREBASE_ERRORS[error.code])
    return { success: false }
  }
}

export const logout = async () => {
  try {
    await signOut(auth)
    localStorage.removeItem('uid')
    return { success: true }
  } catch (error: any) {
    toast.error(FIREBASE_ERRORS[error.code])
    return { success: false }
  }
}

interface loginParams {
  email: string
  password: string
  name: string
}

export const login = async ({ email, password }: loginParams) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password)
    localStorage.setItem('uid', JSON.stringify(user.uid))
    return { success: true, user }
  } catch (error: any) {
    toast.error(FIREBASE_ERRORS[error.code])
    return { success: false }
  }
}
