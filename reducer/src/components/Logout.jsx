import React, { useEffect } from 'react'

export const Logout = () => {
        useEffect(()=>{
                if(localStorage.getItem("user"))localStorage.clear()
                
        },[])
  return (
    <div>Logout</div>
  )
}
