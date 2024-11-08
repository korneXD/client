import React from 'react'

export const TodoFooter = ({num}) => {
  return (
    <div className='absolute bottom-0 right-0 p-2 border border-black rounded-lg text-sm text-black m-2'>
      {num} task left
    </div>
  )
}