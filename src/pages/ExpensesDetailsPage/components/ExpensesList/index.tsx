import { FC, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import useUserStore from 'src/store/useUserStore.ts'
import useExpensesDetails from 'src/pages/ExpensesDetailsPage/store/useExpensesDetails.ts'
import ExpensesItem from 'src/pages/ExpensesDetailsPage/components/ExpensesItem'

import './style.scss'

interface ExpensesListProps {
  date: string
  day: string
}

const ExpensesList: FC<ExpensesListProps> = (props) => {
  const [list, setList] = useState<any>([])
  const { date, day } = props
  const { user } = useUserStore()
  const { calendar, getCalendarExpenses, deleteCalendarExpenses } = useExpensesDetails()

  const removeItem = async (expensesId: string) => {
    if (confirm('You want to delete this item?')) {
      await deleteCalendarExpenses(expensesId, date, day, user?.uid || '')
      toast.success('Item was successfully deleted!')
    }
  }

  const setup = async () => {
    await getCalendarExpenses(date, day, user?.uid || '')
    await setList(calendar[date][day])
  }

  useEffect(() => {
    setup()
  }, [calendar])

  return (
    <div className="expenses-list">
      {list.length ? (
        list.map((item: any) => <ExpensesItem key={item.id} {...item} removeItem={removeItem} />)
      ) : (
        <div>Empty list</div>
      )}
    </div>
  )
}

export default ExpensesList
