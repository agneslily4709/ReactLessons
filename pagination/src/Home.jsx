import React, { useEffect, useState } from 'react'

const Home = () => {
        const [data,setData] = useState(null)
        const [total,setTotal] = useState(0)
        const [display,setDisplay] = useState(null)
        const [curr,setCurr] = useState(0)
        const handleClick = (id) => {
                let start = (total*id)
                let end = (total*id)+total
                setDisplay(data.slice(start,end))
                setCurr(id)
        }
        useEffect(() => {
                //200 - 10 buttons 200/10 = 20 todos/ per
                fetch("https://jsonplaceholder.typicode.com/todos")
                .then((data) => data.json())
                .then((json) => {
                        setData(json)
                        setTotal(json.length/10)
                        setDisplay(json.slice(0,json.length/10))
                })
        },[])
        const handleNext  = () =>{
                if(curr <data.length/20-1) handleClick(curr+1)
        }
        const handlePrev =() => {
                if(curr>=1) handleClick(curr-1)
        }
  return (
    <div>
        <h2>Home</h2>
        {display&& display.map((ele) => {
                return(
                        <li key={ele.id}>{ele.title}</li>
                )
        })}
        <div>
                <button onClick={handlePrev}>prev</button>
                {data && [...Array(data.length/20)].map((x, i)=> 
                        <button style={{
                                backgroundColor:(curr === i) ? "red":"white"
                        }} key={i} onClick = {(e) => handleClick(i)}> {i+1} </button>
                )}
                <button onClick={handleNext}>next</button>
        </div>
    </div>
  )
}

export default Home