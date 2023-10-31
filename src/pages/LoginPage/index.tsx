import { FC, useState } from 'react'
import useUserStore from 'src/store/useUserStore.ts'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import type { LoginUserType } from 'src/validations/authValidations.ts'
import { APP_ROUTES, AUTH_ROUTES } from 'src/constants'
import { CreateUserType, LoginUserSchema } from 'src/validations/authValidations.ts'
import AuthCard from 'src/components/Auth/AuthCard'
import { Input, Button } from 'src/UI'

import './style.scss'

const LoginPage: FC = () => {
  const { login } = useUserStore()

  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginUserType>({ resolver: zodResolver(LoginUserSchema) })
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<CreateUserType> = async (userData) => {
    setLoading(true)
    const { success } = await login(userData)
    if (success) {
      navigate(APP_ROUTES.home_path)
    }
    setLoading(false)
  }

  return (
    <AuthCard
      title="Login page"
      linkUrl={AUTH_ROUTES.sign_in_path}
      linkText="SignIn!"
      bottomText="Have no account?"
    >
      <div className="login">
        <Input
          {...register('email')}
          errorsMessage={errors.email?.message}
          label="Email"
          type="email"
          placeholder="your@mail.com"
        />
        <Input
          {...register('password')}
          errorsMessage={errors.password?.message}
          label="Password"
          type="password"
          placeholder="********"
        />
        <Button onClick={handleSubmit(onSubmit)} isLoading={loading} disabled={loading}>
          Login
        </Button>
      </div>
    </AuthCard>
  )
}

export default LoginPage
