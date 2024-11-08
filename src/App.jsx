import { useState } from "react";
import { Header } from "./components/Header";
import { Login } from "./components/Login";
import { TodoList } from "./components/TodoList";
import { Logout } from "./components/Logout";
import { AddTodo } from "./components/AddTodo";
import { QueryClientProvider,QueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {

  const [isLoggedIn,setIsLoggedIn] = useState(false)

  return (
    <QueryClientProvider client={queryClient}>
    <div className="bg-white min-h-screen text-white flex justify-center items-center flex-col select-none">
      <Header />
      {isLoggedIn ? 
      <>
        <AddTodo />
        <TodoList />
        <Logout setIsLoggedIn={setIsLoggedIn}/>
      </>
       : 
      <Login setIsLoggedIn={setIsLoggedIn}/>}
    </div>
    </QueryClientProvider>
  )
}

export default App
