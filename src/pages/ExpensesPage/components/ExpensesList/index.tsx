import { FC } from 'react'
import { Button } from 'src/UI'
import { Pencil, Trash2 } from 'lucide-react'

import './style.scss'

interface ExpensesListProps {
  list: Array<{
    id: string
    name: string
    price: string
    quantity: string
  }>
}

const ExpensesList: FC<ExpensesListProps> = (props) => {
  const { list } = props
  return (
    <div className="expenses-list">
      <table className="expenses-list__table">
        <thead className="expenses-list__head">
          <tr className="expenses-list__head-row">
            <th className="expenses-list__head-cell">Name</th>
            <th className="expenses-list__head-cell">Price</th>
            <th className="expenses-list__head-cell">Quantity</th>
            <th className="expenses-list__head-cell">Actions</th>
          </tr>
        </thead>
        <tbody className="expenses-list__body">
          {list.map((expense) => (
            <tr className="expenses-list__body-row" key={expense.id}>
              <td className="expenses-list__body-cell">
                <div className="expenses-list__cell-name">{expense.name}</div>
              </td>
              <td className="expenses-list__body-cell">
                <div className="expenses-list__cell-price">{expense.price}</div>
              </td>
              <td className="expenses-list__body-cell">
                <div className="expenses-list__cell-price">{expense.quantity}</div>
              </td>
              <td className="expenses-list__body-cell">
                <div className="expenses-list__body-actions">
                  <Button className="expenses-list__edit button__white">
                    <Pencil />
                  </Button>
                  <Button className="expenses-list__remove button__white">
                    <Trash2 />
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ExpensesList
