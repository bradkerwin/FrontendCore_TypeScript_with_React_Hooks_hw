import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0)

  const incrementCounter = () => {
    setCount(prevCount => (prevCount + 1) )  
  }

  const decrementCounter = () => {
    setCount(prevCount => (prevCount - 1) )  
  }

  const resetCounter = () => {
    setCount(0)
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
      <button onClick={resetCounter}>Reset</button>
    </div>
  )
}

export default Counter