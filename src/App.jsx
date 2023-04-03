import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Stripe from './components/Stripe'

function App() {


  return (
    <div className="App">
      <Stripe />
    </div>
  )
}

export default App
