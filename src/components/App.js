import React, { useState } from 'react'

export default () => {
  return (<Counter />)
}

const Counter = () => {
  let [counter, setCounter] = useState([0])
  return (
    <React.Fragment>
      <button onClick={() => { setCounter(++counter) }}>plus</button>
      <button onClick={() => { setCounter(--counter) }}>minus</button>
      {counter}
    </React.Fragment>
  )
}
