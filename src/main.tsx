import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import 'src/assets/styles/common.scss'

import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyAx9a8i9fhUswIpvCP8QanD-zkhU9fgVzs',
  authDomain: 'react-money-manager-9edf1.firebaseapp.com',
  projectId: 'react-money-manager-9edf1',
  storageBucket: 'react-money-manager-9edf1.appspot.com',
  messagingSenderId: '397808631979',
  appId: '1:397808631979:web:211a76b30352971010f7ee'
}

initializeApp(firebaseConfig)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
