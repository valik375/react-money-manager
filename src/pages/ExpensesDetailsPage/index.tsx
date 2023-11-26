import { FC, useState } from 'react'
import { useParams } from 'react-router-dom'
import ExpensesList from 'src/pages/ExpensesDetailsPage/components/ExpensesList'
import AddExpensesModal from 'src/pages/ExpensesDetailsPage/components/AddExpensesModal'
import PageHeader from 'src/components/App/PageHeader'
import { Button } from 'src/UI'
import { Plus } from 'lucide-react'

import './style.scss'

const ExpensesDetailsPage: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { date, day } = useParams()

  return (
    <div className="expenses-details">
      <AddExpensesModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <PageHeader title={`Date: ${date}-${day}`}>
        <Button className="button__white" onClick={() => setIsOpen(!isOpen)}>
          <Plus className="expenses-details__button-plus" /> Add
        </Button>
      </PageHeader>
      <ExpensesList date={date || ''} day={day || ''} />
    </div>
  )
}

export default ExpensesDetailsPage
