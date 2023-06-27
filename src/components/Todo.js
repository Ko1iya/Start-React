import { useState } from "react"
import styles from "./todos.module.scss"
function Todo({ inputValue, deleteTodo, index, done, arrTodos }) {
  return (
    <p
      className={(() => {
        let str = styles.todo

        arrTodos.forEach((todo) => {
          if (todo.id === index) {
            if (todo.done) {
              return (str = `${str} ${styles.todoDone}`)
            }
          }
        })

        return str
      })()}
    >
      {inputValue}

      <button
        className={`${styles.but} ${styles.trash}`}
        onClick={() => deleteTodo(index)}
      ></button>
      <button
        className={`${styles.but} ${styles.ok}`}
        onClick={() => done(index)}
      ></button>
    </p>
  )
  // }
}
export default Todo
