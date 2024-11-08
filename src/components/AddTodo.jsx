import { TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { addTodo } from '../utils'
import { useQueryClient } from '@tanstack/react-query'

export const AddTodo = () => {

  const [newTask,setNewTask] = useState('')

  const queryClient = useQueryClient()

  const handleAdd = async ()=>{
    await addTodo({task:newTask})
    queryClient.invalidateQueries('todos')
    setNewTask('')
  }

  return (
    <div className='m-2 p-2 rounded-lg bg-white border border-gray-200 flex justify-center items-center flex-row gap-2'>
      <TextField id='standard-basic' label='Add new task' variant='standard' value={newTask} onChange={(e)=>setNewTask(e.target.value)}/>
      <p className='bg-white h-full w-fit p-2 border text-black uppercase tracking-wide rounded-lg cursor-pointer hover:scale-105 transition-all disabled:opacity-75' onClick={handleAdd} disabled={!newTask}>Add</p>
    </div>
  )
}