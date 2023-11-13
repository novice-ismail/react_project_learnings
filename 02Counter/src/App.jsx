import { useState } from 'react'

import './App.css'

function App() {

  let [counter, setCounter] = useState(0)
  
  
  // let counter =5
 // added condition for counter value should not be greater than 20
  const addValue = () => {
    // console.log("clicked",counter );
    //  counter = counter + 1
    if(counter >= 0 && counter < 20){
      setCounter(counter + 1)
    }else  {
      alert("Greater than 20 values are not allowed")
    }
  }
  // added the condition for not going towards negative values
  const removeValue = () => {
    if(counter > 0){
      setCounter(counter - 1)
    }else{
      alert("Negative values are not allowed")
    }
   
  }
  // added resetvalue button
const  resetValue = () => {
  setCounter(0)
}

 

  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter value: {counter}</h2>

      <button 
      onClick={addValue}
      >Add value{counter}</button>
      <br />
      <button
      onClick={removeValue}
      >Remove value{counter}</button>
      <br />
      <button
      onClick={resetValue}
      >Reset value {counter}</button>
      
      <p>footer: {counter}</p>
    </>
  )
}

export default App
