import styles from "./post.module.scss"
function Post(props) {
  const { userId, id, title, completed } = props
  return (
    <>
      <p className={styles.text}>POST</p>
      <p>{`userId = ${userId},
     id = ${id},
      title = ${title},
       completed = ${completed}`}</p>
    </>
  )
}

export default Post
