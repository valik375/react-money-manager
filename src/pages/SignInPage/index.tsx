import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CreateUserSchema } from 'src/validations/authValidations.ts'
import type { CreateUserType } from 'src/validations/authValidations.ts'
import { APP_ROUTES, AUTH_ROUTES } from 'src/constants'
import { useNavigate } from 'react-router-dom'
import { createUser } from 'src/api/auth.ts'
import { Button, Input, Loader } from 'src/UI'
import AuthCard from 'src/components/Auth/AuthCard'

import './style.scss'

const SignInPage: FC = () => {
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserType>({ resolver: zodResolver(CreateUserSchema) })
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<CreateUserType> = async (data) => {
    setLoading(true)
    const { success } = await createUser(data)
    if (success) {
      navigate(APP_ROUTES.home_path)
    }
    setLoading(false)
  }

  return (
    <>
      {loading ? <Loader /> : null}
      <AuthCard
        title="SignIn page"
        linkUrl={AUTH_ROUTES.login_path}
        linkText="Login!"
        bottomText="Already have account?"
      >
        <Input
          {...register('email')}
          errorsMessage={errors.email?.messages}
          label="Email"
          type="email"
          placeholder="your@mail.com"
        />
        <Input
          {...register('name')}
          errorsMessage={errors.name?.message}
          label="Name"
          type="text"
          placeholder="Jack Smith"
        />
        <Input
          {...register('password')}
          errorsMessage={errors.password?.message}
          label="Password"
          type="password"
          placeholder="********"
        />
        <Input
          {...register('confirmPassword')}
          errorsMessage={errors.confirmPassword?.message}
          label="Confirm Password"
          type="password"
          placeholder="********"
        />
        <Button type="submit" onClick={handleSubmit(onSubmit)}>
          SingIn
        </Button>
      </AuthCard>
    </>
  )
}

export default SignInPage
