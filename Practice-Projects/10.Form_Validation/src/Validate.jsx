import React, { useState } from 'react'
import './index.css'

function Validate() {

    const[userName, setUsername] = useState("")
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const[confirmPassword, setConfirmPassword] = useState("")


    const[errorUserName, setErrorUserName] = useState("")
    const[errorEmail, setErrorEmail] = useState("")
    const[errorPassword, setErrorPassword] = useState("")
    const[errorConfirmPassword, setErrorConfirmPassword] = useState("")

    const[userColor,setUserColor] = useState("")
    const[emailColor,setEmailColor] = useState("")
    const[passwordColor,setPasswordColor] = useState("")
    const[confirmPasswordColor,setConfirmPasswordColor] = useState("")

    function validate(e){
        e.preventDefault()

        if(userName.length > 8){
            setErrorUserName("")
            setUserColor("green")
        }else{
            setErrorUserName("Username must be 8 letter long.")
            setUserColor("red")
        }

        if(email.includes("@gmail")){
            setErrorEmail("")
            setEmailColor("green")
        }else{
            setEmailColor("red")
            setErrorEmail("Email should have @gmail")

        }

        if(password.length > 8){
            setErrorPassword("")
            setPasswordColor("green")
        }else{
            setErrorPassword("Password should be atleat 8 characters long")
            setPasswordColor("red")
        }

        if(password != "" && password == confirmPassword){
            setConfirmPassword("")
            setConfirmPasswordColor("green")
        }else{
            setErrorConfirmPassword("Password didn't matched.")
            setConfirmPasswordColor("red")
        }
    }


  return (
    <>
    <div className="card">
        <div className="card-image"></div>

        <form >
        <input
         type="text"
        placeholder='Name'
        style={{borderColor:userColor}}
        value={userName}
        onChange={(e) => setUsername(e.target.value)}
        />
        <p className="error">{errorUserName}</p>

        <input 
        type="text"
        placeholder='Email'
        style={{borderColor:emailColor}}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
        <p className="error">{errorEmail}</p>
        
        <input 
        type="password"
        placeholder='Password'
        style={{borderColor: passwordColor}}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <p className="error">{errorPassword}</p>
        
        <input 
        type="password"
        placeholder='Confirm Password'
        style={{borderColor: confirmPasswordColor}}
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <p className="error">{errorConfirmPassword}</p>
        
        <button className="submit-btn" onClick={validate}>
            Submit</button>
        </form>
    </div>
    
    </>
  )
}

export default Validate
