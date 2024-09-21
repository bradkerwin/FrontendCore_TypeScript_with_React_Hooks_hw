import React, { useState } from 'react'

const counter = () => {
    const [state, dispatch] = React.useReducer(counterReducer, initialState);

    const [counter, setCounter] = useState('')

  return (
    <>
    
    </>
  )
}

export default counter