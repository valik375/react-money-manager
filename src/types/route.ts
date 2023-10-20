import {ReactElement} from 'react'

export interface IRoute {
  name: string
  path: string
  element: ReactElement
  layout: string
}