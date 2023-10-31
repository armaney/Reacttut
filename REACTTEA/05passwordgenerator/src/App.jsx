import { useState, useCallback, useEffect, useRef} from 'react'


function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")


  const passwordRef = useRef(null)
  const passwordGenerator = useCallback(() => {

    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str+= "0123456789"
    if (charAllowed) str+= "!@#$%&"
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,length)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {passwordGenerator()}, [length, numberAllowed, charAllowed, passwordGenerator])
  
  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-5 py-4 my-9 text-orange-500 bg-gray-800'>
      <h1 className='text-white text-center my-3'>PASSWORD GENERATOR</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
          type='text'
          value={password} 
          className='outline-none w-full py-1 px-4 rounded-xl mx-2' 
          placeholder='password' 
          readOnly
          ref={passwordRef}
        />
        
        <button 
          className='px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-blue-600 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300'
          onClick={copyPasswordToClipboard}
          >copy</button>

      </div>
      <div className='flex text-sm gap-x-6'>
        <div className='flex items-center gap-x-2'>
        <input type='range' min={8} max={100} value={length} className='cursor-pointer' onChange={(e) => {setlength(e.target.value)}}></input>
        <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-2'>
        <input type='checkbox'  defaultChecked={numberAllowed} id='numberInput' onChange={() => {setNumberAllowed((prev) => !prev)}}></input>
        <label htmlFor='numberInput'>Number Allowed</label>
        </div>
        <div className='flex items-center gap-x-2'>
        <input type='checkbox'  defaultChecked={charAllowed} id='charInput' onChange={() => {setCharAllowed((prev) => !prev)}}></input>
        <label htmlFor='charInput'>Special Character Allowed</label>
        </div>

      </div>
    </div>
    </>
  )
}

export default App
