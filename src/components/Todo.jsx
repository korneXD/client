import React from 'react'
import { EditTodo } from './EditTodo'
import { useState } from 'react'
import { useQueryClient } from '@tanstack/react-query'
import { delTodo, updateCompleted } from '../utils'

export const Todo = ({id,task,completed}) => {

    const [open,setOpen] = useState(false)

    const queryClient = useQueryClient()

    const handleDelete = async ()=>{
        await delTodo(id)
        queryClient.invalidateQueries('todos')
    }

    const handleDone = async ()=>{
        await updateCompleted(id)
        queryClient.invalidateQueries('todos')
    }

    const handleEdit = ()=>{
        setOpen(true)
    }

    return (
        <div className='text-black flex justify-center items-center flex-row gap-2 capitalize p-2 border border-gray-200 rounded-[35px] h-full w-full break-all'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-7 text-green-500 stroke-2 hover:scale-110 transition-all hover:text-green-600" onClick={handleDone}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            <p className={`${completed ? 'w-full tracking-wide font-normal line-through':'w-full tracking-wide font-normal'}`}>{task}</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-7 text-red-700 hover:scale-105 transition-all hover:fill-red-700 stroke-2" onClick={handleDelete}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-7 text-blue-500 stroke-2 hover:scale-105 transition-all hover:fill-blue-500" onClick={handleEdit}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
            </svg>
            {open && <EditTodo open={open} setOpen={setOpen} id={id} task={task}/>}
        </div>
    )
}