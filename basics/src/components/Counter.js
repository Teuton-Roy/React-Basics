import './Counter.css'
import React from 'react'
import { useState } from 'react';

const Counter = () => {
    // let num = 0;

    const [count, setCount] = useState(0)
    const handelIncrement =() =>{
        setCount(prevCount => prevCount + 1)
    }

    const handelDecrement = () =>{
        setCount(prevCount => prevCount - 1)
    }

  return (
    <div className='container'>
        <button className='btn' onClick={handelDecrement}>-</button>
        <span>{count}</span>
        <button className='btn' onClick={handelIncrement}>+</button>
    </div>
  )
}

export default Counter
