import { FC } from 'react'
import { Button } from 'src/UI'

import './style.scss'

interface ExpensesItemProps {
  id: string
  name: string
  price: string
  quantity: string
  removeItem: (expensesId: string) => Promise<void>
}

const ExpensesItem: FC<ExpensesItemProps> = (props) => {
  const { id, name, price, quantity, removeItem } = props

  return (
    <div className="expenses-item">
      <div className="expenses-item-wrapper">
        <div className="expenses-item-name">Name: {name}</div>
        <div className="expenses-item-total">Total: ${+price * +quantity}</div>
        <div className="expenses-item-quantity">Quantity: {quantity}</div>
      </div>
      <div className="expenses-item-actions">
        {/*<Button className="expenses-item-edit button__white">Edit</Button>*/}
        <Button className="expenses-item-delete button__white" onClick={() => removeItem(id)}>
          Delete
        </Button>
      </div>
    </div>
  )
}

export default ExpensesItem
