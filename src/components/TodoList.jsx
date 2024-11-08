import React from 'react'
import { TodoFooter } from './TodoFooter'
import { useQuery } from '@tanstack/react-query'
import { getTodos } from '../utils'
import { Todo } from './Todo'

export const TodoList = () => {

  const {data,isLoading,isError,error} = useQuery({queryKey:['todos'],queryFn:getTodos})
  if(isLoading) return <div>loading...</div>
  if(isError) return <div>error: {error.message}</div>
  console.log(data.data);

  return (
    <div className='bg-white h-full w-fit border border-gray-200 rounded-[25px] flex justify-center items-center flex-col p-2 gap-2'>
      {data.data.map(e =>
        <Todo key={e.id} {...e}/>
      )}
      <TodoFooter num={data.data.filter(e=>!e.completed).length}/>
    </div>
  )
}