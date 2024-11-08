import { TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react'

export const Login = ({setIsLoggedIn}) => {

const [username,setUsername] = useState('')
const [password,setPassword] = useState('')
const [isValidUsername,setIsValidUsername] = useState(null)
const [isValidPassword,setIsValidPassword] = useState(null)

const handleLogin=()=>{
    console.log(username,password);
    import.meta.env.VITE_USERNAME==username && import.meta.env.VITE_PASSWORD==password ? setIsLoggedIn(true) : setIsLoggedIn(false)
}

  return (
    <div className='flex flex-col gap-2 shadow-xl border border-gray-200 p-4 rounded-lg'>
    <h1>Login</h1>
    <TextField id="standard-basic" label="Username" variant="standard" value={username} onChange={(e)=>setUsername(e.target.value)} error={!isValidUsername && isValidUsername != null} onBlur={()=>setIsValidUsername(import.meta.env.VITE_USERNAME==username)}/>
    <TextField id="standard-basic" label="Password" type='password' variant="standard" value={password} onChange={(e)=>setPassword(e.target.value)} error={!isValidPassword && isValidPassword != null} onBlur={()=>setIsValidPassword(import.meta.env.VITE_PASSWORD==password)}/>
    <p className='text-black flex justify-center items-center p-2 bg-white rounded-lg border border-gray-200 shadow-xl cursor-pointer transition-all hover:bg-gray-100' onClick={handleLogin}>Login</p>
    </div>
  )
}