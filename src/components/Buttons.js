import styles from "./buttons.module.scss"
function Buttons({ reset, clearDone }) {
  return (
    <div className={styles.buttons}>
      <button className={styles.trash} onClick={clearDone}></button>
      <button className={styles.reset} onClick={reset}></button>
    </div>
  )
}
export default Buttons
