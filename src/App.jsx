import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ThreeScene from './components/ThreeScene'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 
      <ThreeScene />
      <div style={{ height: "300vh" }}></div>
    </>
  )
}

export default App
