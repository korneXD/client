import { TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { updateTask } from '../utils'
import { useQueryClient } from '@tanstack/react-query'

export const EditTodo = ({ open, setOpen, id, task }) => {

  const [updatedTask, setUpdatedTask] = useState(task)

  const queryClient = useQueryClient()

  const handleUpdate = async () => {
   await updateTask(id,{task:updatedTask})
   queryClient.invalidateQueries('todos')
    handleClose()
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div className='div flex justify-center items-center flex-col min-h-64 min-w-64 bg-white z-20 absolute rounded-lg border border-black p-4 gap-2'>
      <div className='div flex justify-center items-center flex-col gap-2'>
        <h1 className='text-black text-2xl'>Change task</h1>
        <p className='text-xs'>{task}</p>
        <TextField id='standard-basic' label='Add new task' variant='standard' value={updatedTask} onChange={(e) => setUpdatedTask(e.target.value)} />
      </div>
      <div className='div flex justify-center items-center flex-row gap-2'>
        <p className='text-white p-1 rounded-lg border border-black bg-red-500 font-bold cursor-pointer' onClick={handleClose}>Close</p>
        <p className='text-white p-1 rounded-lg border border-black bg-green-500 font-bold cursor-pointer' onClick={handleUpdate}>Save</p>
      </div>
    </div>
  )
}