import "./indexs.scss"
import "./form.scss"
import FormToDo from "./components/FormToDo"
import Buttons from "./components/Buttons"
import Todos from "./components/Todos"
import { useState } from "react"
import Todo from "./components/Todo"

const App = () => {
  const [arrTodos, setArrTodos] = useState([])
  const [inputValue, setInputValue] = useState("Новая задача")

  console.log(arrTodos)

  return (
    <div className='app'>
      <header className='myHeader'>Todo List</header>
      <FormToDo
        inputValue={inputValue}
        setInputValue={setInputValue}
        arrTodos={arrTodos}
        setArrTodos={setArrTodos}
      />
      <Buttons />
      <Todos arrTodos={arrTodos} />
    </div>
  )
}

export default App
