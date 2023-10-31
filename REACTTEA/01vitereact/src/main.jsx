import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <h1>my custom aappp</h1>
  )
}
ReactDOM.createRoot(document.getElementById('root')).render(
    <MyApp />
)
