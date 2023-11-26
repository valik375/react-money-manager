import { app } from './firebase.ts'
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  setDoc,
  updateDoc,
  getDoc,
  deleteDoc,
  query,
  getDocs,
} from 'firebase/firestore'
import { getStorage, uploadBytes, ref, getDownloadURL } from 'firebase/storage'

export const db = getFirestore(app)

export const setDataToFirestore = async (
  path: string,
  data: any,
  docName?: string | undefined,
): Promise<any> => {
  if (docName) {
    return setDoc(doc(db, path, docName), data)
  }
  const new_item: any = await addDoc(collection(db, path), data)
  await updateDoc(doc(db, path, new_item.id), { id: new_item.id })
  return new_item
}

export const getFirestoreItem = async (path: string, selector: any) => {
  const docRef = doc(db, path, selector)
  const res = await getDoc(docRef)
  return res.data()
}

export const removeDataFromFirestore = async (path: string, id: string) => {
  return deleteDoc(doc(db, path, id))
}

export const getListFromFirestore = async (path: string) => {
  try {
    const collectionData = collection(db, path)
    const queryData = query(collectionData)
    const result = await getDocs(queryData)

    const result_data: Array<any> = []

    result.forEach((doc: any) => {
      result_data.push(doc.data())
    })

    return result_data
  } catch (error) {
    console.log(error)
    return []
  }
}

const storage = getStorage()

export const uploadImageToStore = async (imageFile: File, path: string) => {
  const image_path = `${path}/${Date.now()}${imageFile.name}`
  const checkListImageRef = ref(storage, image_path)
  await uploadBytes(checkListImageRef, imageFile)
  return await getDownloadURL(ref(storage, image_path))
}
