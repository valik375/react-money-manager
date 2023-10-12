import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CreateUserSchema } from 'src/validations/authValidations.ts'
import type { CreateUserType } from 'src/validations/authValidations.ts'
import { Button, Card, Input } from 'src/UI'

const SignInPage: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<CreateUserType>({ resolver: zodResolver(CreateUserSchema) })

  const onSubmit: SubmitHandler<CreateUserType> = async (data) => {
    console.log(data)
  }

  return (
    <div>
      <Card>
        <Input
          {...register("email")}
          errorsMessage={errors.email?.message}
          label="Email"
          type="email"
        />
        <Input
          {...register("name")}
          errorsMessage={errors.name?.message}
          label="Name"
          type="text"
        />
        <Input
          {...register("password")}
          errorsMessage={errors.password?.message}
          label="Password"
          type="password"
        />
        <Input
          {...register("confirmPassword")}
          errorsMessage={errors.confirmPassword?.message}
          label="Confirm Password"
          type="password"
        />
        <Button type="submit" onClick={handleSubmit(onSubmit)}>SingIn</Button>
      </Card>
    </div>
  )
}

export default SignInPage