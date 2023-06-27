import { v4 as uuidv4 } from "uuid"
import { useState } from "react"
import styles from "./formToDo.module.scss"
import Todo from "./Todo"
function FormToDo(props) {
  const { arrTodos, setArrTodos } = props
  const [inputValue, setInputValue] = useState("Новая задача")

  function handleFormSubmit(event) {
    event.preventDefault()
    setArrTodos([...arrTodos, { inputValue, done: false, id: uuidv4() }])
  }

  // как Достучаться до value с родительского

  return (
    <form className={styles.formToDo} onSubmit={handleFormSubmit}>
      <input
        className={styles.inp}
        type='text'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type='submit' className={styles.but}>
        Submit
      </button>
    </form>
  )
}

export default FormToDo
