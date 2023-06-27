import styles from "./todos.module.scss"
import Todo from "./Todo"

function Todos({ arrTodos, setArrTodos, deleteTodo, done }) {
  // console.log("рендеринг Todos")

  // const deleteTodo = () =>
  //   setArrTodos(() => {
  //     let arr = [...arrTodos]
  //     arr.splice(index, 1)
  //     return arr
  //   })
  return (
    <div className={styles.todos}>
      {arrTodos.length === 0 ? "Задач нет" : ""}
      {arrTodos.map((todo) => (
        <Todo
          inputValue={todo.inputValue}
          key={todo.id}
          deleteTodo={deleteTodo}
          index={todo.id}
          done={done}
          arrTodos={arrTodos}
          // deleteTodo={deleteTodo}
        />
      ))}
    </div>
  )
}
export default Todos
