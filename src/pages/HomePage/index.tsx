import { FC } from 'react'
import useUserStore from 'src/store/useUserStore.ts'

import './style.scss'

const HomePage: FC = () => {
  const { user } = useUserStore()
  console.log(user)

  return <div className="home-page">Home Page</div>
}

export default HomePage
