import styles from "./todos.module.scss"
import Todo from "./Todo"

function Todos({ arrTodos }) {
  return (
    <div className={styles.todos}>
      {arrTodos.map((todo) => (
        <Todo inputValue={todo} key={todo} />
      ))}
    </div>
  )
}
export default Todos
