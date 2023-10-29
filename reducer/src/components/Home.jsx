import React, { useEffect, useState } from 'react'

const Home = () => {
        const [user,setUser] = useState(null)
        useEffect(()=>{
                let info = localStorage.getItem("user")
                if(info){
                        setUser(JSON.parse(info))
                }
                console.log(user)
        },[])
  return (
    <div className='container'>
        <h1>Home</h1>
    </div>
  )
}

export default Home