import React from 'react'
import Counter from '../Context/Counter'
import GrandChild1 from './GrandChild1'

const Child1 = () => {

        return (
    <div className='child'><h2>Child1</h2>
    <GrandChild1/>
    </div>
  )
}

export default Child1