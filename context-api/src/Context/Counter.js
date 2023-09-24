import React,{ createContext, useState} from 'react'
export const CounterContext = createContext(null)

const CounterProvider = ({children}) => {
        const [counter,setCounter] = useState(0)
        let data = {
                key:"AgnesLily",
                counter,
                setCounter
        }
  return (
    <CounterContext.Provider value={data}>
        {children}
    </CounterContext.Provider>
  )
}

export default CounterProvider
