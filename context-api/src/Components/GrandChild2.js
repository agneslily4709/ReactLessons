import React,{useContext} from 'react'
import { CounterContext } from '../Context/Counter'

const GrandChild2 = () => {
        const {key,counter,setCounter} = useContext(CounterContext)

  return (
    <div className='grand-child'>
        <h5>GrandChild2</h5>
        <p>{key}</p>
        <button onClick={() => setCounter(prev => prev+1)}>Counter</button>
    </div>
  )
}

export default GrandChild2