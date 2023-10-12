import { auth } from 'src/api/firebase.ts'
import { createUserWithEmailAndPassword } from 'firebase/auth'

export const createUser = async (email:string, password:string) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password)

  return userCredential
}
