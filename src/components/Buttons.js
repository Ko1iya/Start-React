import styles from "./buttons.module.scss"
function Buttons() {
  return (
    <div className={styles.buttons}>
      <button className={styles.trash}></button>
      <button className={styles.reset}></button>
    </div>
  )
}
export default Buttons
