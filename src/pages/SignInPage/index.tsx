import { FC, useState } from 'react'
import { getAuth, createUserWithEmailAndPassword  } from 'firebase/auth'
import Card from 'src/UI/Card'

const SignInPage: FC = () => {
  const auth = getAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleRegistration = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        console.log('User registered:', user)
      })
      .catch((error) => {
        console.error('Registration error:', error)
      })
  }

  return (
    <div>
      <Card>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleRegistration}>Register</button>
      </Card>
    </div>
  )
}

export default SignInPage