import { FC, useState } from 'react'
import { useParams } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CreateExpensesSchema, CreateExpensesType } from 'src/validations/authValidations.ts'
import useUserStore from 'src/store/useUserStore.ts'
import useExpensesDetails from 'src/pages/ExpensesDetailsPage/store/useExpensesDetails.ts'
import { Modal, Input, Button } from 'src/UI'

import './style.scss'

interface AddExpensesModalProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const AddExpensesModal: FC<AddExpensesModalProps> = (props) => {
  const { isOpen, setIsOpen } = props
  const [isLoading, setIsLoading] = useState(false)
  const { date, day } = useParams()
  const { user } = useUserStore()
  const { setCalendarExpenses } = useExpensesDetails()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreateExpensesType>({ resolver: zodResolver(CreateExpensesSchema) })

  const submit: SubmitHandler<CreateExpensesType> = async (userData) => {
    setIsLoading(true)
    await setCalendarExpenses(userData, date || '', day || '', user?.uid || '')
    setIsLoading(false)
    reset({ name: '', price: '', quantity: '' })
  }

  return (
    <Modal className="expenses-modal" isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="expenses-modal__wrapper">
        <div className="expenses-modal__title">Add Expenses</div>
        <div className="expenses-modal__form">
          <Input
            {...register('name')}
            errorsMessage={errors.name?.message}
            label="Name"
            type="text"
            placeholder="Product or action name"
          />
          <Input
            {...register('price')}
            errorsMessage={errors.price?.message}
            label="Price"
            type="text"
            placeholder="139"
          />
          <Input
            {...register('quantity')}
            errorsMessage={errors.quantity?.message}
            label="Quantity"
            type="number"
            placeholder="1"
          />
          <Button onClick={handleSubmit(submit)} disabled={isLoading} isLoading={isLoading}>
            Add
          </Button>
        </div>
      </div>
    </Modal>
  )
}

export default AddExpensesModal
