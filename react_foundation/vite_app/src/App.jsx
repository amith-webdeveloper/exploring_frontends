import './App.css'
import { useState } from 'react'

function App() {
  const [count , setcount] = useState(0)

  return (
    <>
    <button onClick={()=>{setcount((count)=>count+1)}}>click</button>
    <div>{count}</div>
    </>
  )
}

export default App
