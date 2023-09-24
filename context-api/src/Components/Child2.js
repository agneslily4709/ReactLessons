import React, { useContext } from 'react'
import { CounterContext } from '../Context/Counter'
import GrandChild2 from './GrandChild2'
const Child2 = () => {
  return (
    <div className='child'>
        <h2>Child2</h2>
        <GrandChild2/>
    </div>
  )
}

export default Child2