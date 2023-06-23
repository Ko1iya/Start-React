import { useState } from "react"
import Counter from "./Counter"

function CounterInterval(props) {
  const [count, setCount] = useState(0)
  setTimeout(() => setCount(count + 1), 2000)

  return <Counter count={count} />
}

export default CounterInterval
