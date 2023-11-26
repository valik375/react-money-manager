import { FC } from 'react'
import { Button } from 'src/UI'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import './style.scss'

interface ExpensesTabsProps {
  month: string
  prevMonth: () => void
  nextMonth: () => void
}

const ExpensesTabs: FC<ExpensesTabsProps> = (props) => {
  const { month, prevMonth, nextMonth } = props
  return (
    <div className="expenses-tabs">
      <div className="expenses-tabs__wrapper">
        <Button className="expenses-tabs__button button__white" onClick={prevMonth}>
          <ChevronLeft />
        </Button>
        <div className="expenses-tabs__month">
          <div className="expenses-tabs__month-text">{month}</div>
        </div>
        <Button className="expenses-tabs__button button__white" onClick={nextMonth}>
          <ChevronRight />
        </Button>
      </div>
    </div>
  )
}

export default ExpensesTabs
