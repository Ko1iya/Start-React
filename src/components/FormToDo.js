import { useState } from "react"
import styles from "./formToDo.module.scss"
import Todo from "./Todo"
function FormToDo(props) {
  const { inputValue, setInputValue, arrTodos, setArrTodos } = props

  function handleFormSubmit(event) {
    event.preventDefault()
  }

  function writing() {
    setArrTodos(
      (() => {
        arrTodos.push(inputValue)
        const newArr = arrTodos
        return newArr
      })()
    )

    setInputValue("Новая задача")
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
      <button className={styles.but} onClick={writing}>
        Submit
      </button>
    </form>
  )
}

export default FormToDo
