import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(10)
  
  //let counter = 5

  const addValue= ()=>{
    setCounter(counter + 1)
    //setCounter(prevCounter => prevCounter + 1) (different batch)
  }
  const removeValue= ()=>{
    if (counter > 0){
      setCounter(counter - 1)
    }
    
  }
  return ( 
    <>
      
      <h1>Chai + React</h1>
      <h2>Counter value: {counter}</h2>
      <button
      onClick={addValue}>Add Value</button>
      <br></br>
      <button onClick={removeValue}>Remove Value</button>
      <p>footer lol: {counter}</p>
    </>
  )
}
export default App
