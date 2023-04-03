import './App.css'
import Stripe from './components/Stripe'
import panjabi from '../src/assets/panjabi.jpg'
import { useState } from 'react'
import Navbar from './components/Navbar'

function App() {
  const [showForm, setShowForm] = useState(false)

  return (
    <div className="App">
      <Navbar />
      {
        showForm
          ?
          <Stripe />
          :
          <>
            <h3>$100.00</h3>
            <img src={panjabi} />
            <button onClick={() => setShowForm(true)}>BUY</button>
          </>
      }
    </div>
  )
}

export default App
