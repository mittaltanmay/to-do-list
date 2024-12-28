import { useState,useEffect} from "react"
import TodoInput from "./components/todoInput"
import Todo from "./components/Todo"
function App() {
  const [todos,setTodos]=useState([]) // for todos array
  const [todovalue,setTodo] =useState('')// for input todo value
  const [count,setcount]=useState(0);//for count
  //having all state in here because tey need to be accesed by both Todoinput and Todo
  function persistent(newList) // local storage for todo
  {
    localStorage.setItem('todos',JSON.stringify({todos:
      newList,
    }))
  }
  function AddTodos(newTodo)// adding new todo
  {
    const newTodoList=[...todos,newTodo] // ...todo keep all the old values of 
    persistent(newTodoList)//storing changes in local storage
    setTodos(newTodoList) // set new value for todo array
    //added myself
    let len=newTodoList.length;
    setcount(len)
  }
  function deleteTodo(index)
  {
    const newTodoList=todos.filter((todo,todoIndex)=>{
      return todoIndex!==index;
    })// filter to push only those element with index not equal to todoindex
    persistent(newTodoList)
    setTodos(newTodoList)
    setcount(newTodoList.length)
  }
  function editTodo(index)
  {
    const editedTodo=todos[index];
    setTodo(editedTodo);
    deleteTodo(index);
  }
  useEffect(()=>{
    if(!localStorage) return
    let localtodos=localStorage.getItem('todos')
    if(!localtodos) return
    localtodos=JSON.parse(localtodos).todos
    setTodos(localtodos)
  },[])
  return (
    <>
      <TodoInput todos={todos} AddTodos={AddTodos} todovalue={todovalue} setTodo={setTodo} count={count} setcount={setcount}/>
      <Todo editTodo={editTodo} deleteTodo={deleteTodo} todos={todos}/>
    </>
  )
}

export default App
