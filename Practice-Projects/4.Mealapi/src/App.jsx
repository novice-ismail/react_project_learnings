import { useState } from 'react'
import Menu from './Menu'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Menu />
    </>
  )
}

export default App
