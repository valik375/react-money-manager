import { FC, useState } from 'react'
import { Card, Input, Button } from 'src/UI'

import './style.scss'

const LoginPage: FC = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const submit = () => {

  }

  return (
    <div>
      <Card className="login__card">
        <Input
          label="Email"
          id="email"
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={setEmail}
        />
        <Input
          label="Password"
          id="password"
          type="password"
          placeholder="********"
          value={password}
          onChange={setPassword}
        />
        <Button onClick={submit}>Login</Button>
      </Card>
    </div>
  )
}

export default LoginPage