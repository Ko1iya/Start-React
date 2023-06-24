import styles from "./todos.module.scss"
function Todo({ inputValue }) {
  return (
    <p className={styles.todo}>
      {inputValue}
      <button className={`${styles.but} ${styles.trash}`}></button>
      <button className={`${styles.but} ${styles.ok}`}></button>
    </p>
  )
}
export default Todo
