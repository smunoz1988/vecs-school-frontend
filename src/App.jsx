import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>this will be the page for log in</h1>
      <p>once the user logs in with username, it should take to main page</p>
    </>
  )
}

export default App
