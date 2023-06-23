import "./indexs.scss"
import "./form.scss"
import Persons from "./components/Persons"
import Counter from "./components/Counter"
import Button from "./components/Button"
import { useState } from "react"
import ResetBut from "./components/ResetBut"
import Form from "./components/Form"
import CounterInterval from "./components/CounterInterval"
import Post from "./components/Posts"
import Posts from "./components/Posts"
const App = () => {
  const [count, setCount] = useState(0)
  // const [countInterval, setCountInterval] = useState(0)

  // setInterval(() => setCountInterval(countInterval + 1), 2000)

  function upCount() {
    setCount(count + 1)
  }

  function reset() {
    setCount(0)
  }

  return (
    <div style={{ textAlign: "center" }}>
      <Posts />
      <Counter count={count} />
      <CounterInterval />
      {/* <Counter count={countInterval} /> */}
      <div className='myContainer'>
        <Button text='Click me' onClick={upCount} />
        <Button text='Click meee!!' onClick={upCount} />
      </div>
      <ResetBut count={count} onClick={reset} />

      <Form />
    </div>
  )
}

export default App
