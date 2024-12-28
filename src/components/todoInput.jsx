import React from 'react'
export default function TodoInput(props) {
  const {AddTodos,todovalue,setTodo,count,setcount,todos}=props
  setcount(todos.length)
  return (
    <header>
        <input value={todovalue} onChange={(e)=>
          {
            setTodo(e.target.value)
          }
        } placeholder='Enter Task'/>
        <button onClick={()=>{
          if(todovalue.length>0) AddTodos(todovalue)
          setTodo('')
        }}>Add</button>
        <p className='counter'>Count:{count}</p>
    </header>
  )
}
