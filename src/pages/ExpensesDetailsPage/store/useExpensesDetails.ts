import { create } from 'zustand'
import toast from 'react-hot-toast'
import {
  getListFromFirestore,
  removeDataFromFirestore,
  setDataToFirestore,
} from 'src/api/helpers.ts'
import { FIREBASE_ERRORS } from 'src/constants'

interface IExpensesDetailsStore {
  calendar: any
  getCalendarExpenses: (date: string, day: string, uid: string) => Promise<{ success: boolean }>
  setCalendarExpenses: (
    expenses: any,
    date: string,
    day: string,
    uid: string,
  ) => Promise<{ success: boolean }>
  deleteCalendarExpenses: (
    expenses: string,
    date: string,
    day: string,
    uid: string,
  ) => Promise<{ success: boolean }>
  updateCalendarExpenses: (
    expenses: any,
    date: string,
    day: string,
    uid: string,
  ) => Promise<{ success: boolean }>
}

const useExpensesDetails = create<IExpensesDetailsStore>((set) => ({
  calendar: [],
  getCalendarExpenses: async (date, day, uid) => {
    try {
      const response: any = await getListFromFirestore(`${uid}/${date}/${day}`)
      set((state) => ({
        calendar: [...state.calendar, (state.calendar[date] = { [day]: [...response] })],
      }))
      return { success: true }
    } catch (error: any) {
      toast.error(FIREBASE_ERRORS[error.code])
      return { success: false }
    }
  },
  setCalendarExpenses: async (expenses, date, day, uid) => {
    try {
      await setDataToFirestore(`${uid}/${date}/${day}`, expenses)
      return { success: true }
    } catch (error: any) {
      toast.error(FIREBASE_ERRORS[error.code])
      return { success: false }
    }
  },
  deleteCalendarExpenses: async (expensesId, date, day, uid) => {
    try {
      await removeDataFromFirestore(`${uid}/${date}/${day}`, expensesId)
      return { success: true }
    } catch (error: any) {
      toast.error(FIREBASE_ERRORS[error.code])
      return { success: false }
    }
  },
  updateCalendarExpenses: async (expenses, date, day, uid) => {
    try {
      await setDataToFirestore(`${uid}/${date}/${day}`, expenses, expenses.id)
      set((state) => ({
        calendar: [...state.calendar, (state.calendar[date][day] = expenses)],
      }))
      return { success: true }
    } catch (error: any) {
      toast.error(FIREBASE_ERRORS[error.code])
      return { success: false }
    }
  },
}))

export default useExpensesDetails
