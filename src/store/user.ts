import { create } from 'zustand'
import { IUser } from 'src/types/user.ts'

interface IUserStore {
  user: IUser | null
  setUser: (user: any) => void
}

const useUserStore = create<IUserStore>((set) => ({
  user: null,
  setUser: (user: any) =>
    set(() => ({
      user: user,
    })),
}))

export default useUserStore
