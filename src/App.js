import { useState } from "react"
import "./indexs.scss"
import "./form.scss"
import FormToDo from "./components/FormToDo"
import Buttons from "./components/Buttons"
import Todos from "./components/Todos"
import Todo from "./components/Todo"

const App = () => {
  const [arrTodos, setArrTodos] = useState([])
  // const [index, setIndex] = useState(0)

  console.log(arrTodos, "рен app")

  function resetHandler() {
    setArrTodos([])
  }

  function deleteTodoHandler(index) {
    setArrTodos(arrTodos.filter((todo) => todo.id !== index))
  }

  function doneHandler(index) {
    setArrTodos(
      arrTodos.map((objTodo) => {
        if (objTodo.id === index) {
          return { ...objTodo, done: !objTodo.done }
        }
        return { ...objTodo }
      })
    )
  }

  function clearDoneHandler() {
    setArrTodos(arrTodos.filter((objTodo) => !objTodo.done))
  }

  return (
    <div className='app'>
      <header className='myHeader'>Todo List</header>
      <FormToDo arrTodos={arrTodos} setArrTodos={setArrTodos} />
      <Buttons reset={resetHandler} clearDone={clearDoneHandler} />
      <Todos
        arrTodos={arrTodos}
        setArrTodos={setArrTodos}
        deleteTodo={deleteTodoHandler}
        done={doneHandler}
      />
    </div>
  )
}

export default App
