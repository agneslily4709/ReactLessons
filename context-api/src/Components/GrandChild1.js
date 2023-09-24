import React,{useContext} from 'react'
import { CounterContext } from '../Context/Counter'

const GrandChild1 = () => {
        const {key,counter,setCounter} = useContext(CounterContext)

  return (
    <div className='grand-child'>
        <h5>GrandChild1</h5>
        <p>{key}</p>
        <p className='display'>{counter}</p>
    </div>
  )
}

export default GrandChild1