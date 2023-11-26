import { FC, useEffect, useState } from 'react'
import useUserStore from 'src/store/useUserStore.ts'
import moment from 'moment/moment'
import { getListFromFirestore } from 'src/api/helpers.ts'
import PageHeader from 'src/components/App/PageHeader'
import ExpensesTabs from 'src/pages/ExpensesPage/components/ExpensesTabs'
import ExpensesCalendar from 'src/pages/ExpensesPage/components/ExpensesCalendar'

import './style.scss'

const ExpensesPage: FC = () => {
  const [calendar, setCalendar] = useState<Array<any>>([])
  const [month, setMonth] = useState<number>(moment().month())
  const year = new Date().getFullYear()
  const { user } = useUserStore()

  const setup = async () => {
    const currentMonth = await getListFromFirestore(`${user?.uid}/${year}-${month}`)
    setCalendar(currentMonth || [])
  }

  useEffect(() => {
    setup()
  }, [])

  const nextMonth = async () => {
    setMonth(month + 1)
    await setup()
  }
  const prevMonth = async () => {
    setMonth(month - 1)
    await setup()
  }

  return (
    <div className="expenses-page">
      <PageHeader title="Expenses Page" />
      <ExpensesTabs
        month={moment().month(month).format('MMMM')}
        nextMonth={nextMonth}
        prevMonth={prevMonth}
      />
      <ExpensesCalendar data={calendar} year={year} month={month} />
    </div>
  )
}

export default ExpensesPage
