import { useEffect } from "react"
import { useState } from "react"
import Post from "./Post"
function Posts() {
  const [posts, setPost] = useState([])
  const [error, setError] = useState("")
  const [load, setLoad] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos/")
        const json = await res.json()
        setPost(json)
      } catch (error) {
        setError(error.massage)
      }
      setLoad(false)
    }
    fetchData()
    // fetch("https://jsonplaceholder.typicode.com/todos/")
    //   .then((response) => response.json())
    //   .then((json) => {
    //     setPost(json)
    //     // console.log(post)
    //     // console.log(json)
    //   })
    //   .catch((error) => setError(error.message))
    //   .finally(() => setLoad(false))
  }, [])

  return (
    <div>
      <h1>POST</h1>
      <hr />

      {load ? (
        <h1>Loading...</h1>
      ) : (
        posts.map((post) => <Post {...post} key={post.id} />)
      )}
    </div>
  )
}

export default Posts
