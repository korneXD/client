import React from 'react'

export const Logout = ({setIsLoggedIn}) => {
  return (
    <div>
      <p className='m-2 pl-4 pr-4 pt-2 pb-2 text-md font-bold bg-red-500 rounded-lg border border-red-700 absoulte fixed top-0 right-0 cursor-pointer transition-all hover:bg-red-600' onClick={()=>setIsLoggedIn(false)}>Logout</p>
    </div>
  )
}