import './use-state.css'
import React from 'react'
import {useState} from 'react'


const Usestate = () => {

  const [count, setCount] = useState(1)

  function decrementCount() {
    // setCount(count - 1)

    setCount(prevCount => prevCount - 1)
  }

  function incrementCount() {
    setCount(prevCount => prevCount + 1)
  }

  return (
    <div className="container">
      <div className='counter'>
        <button onClick={decrementCount}>-</button>
        <span>{count}</span>
        <button onClick={incrementCount}>+</button>
      </div>
    </div>
    
  )
}

export default Usestate
