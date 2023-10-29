import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const Logout = () => {
        const navigate = useNavigate()
        useEffect(()=>{
                if(localStorage.getItem("user"))localStorage.clear()
                navigate("/login")
        },[])
  return (
    <div>Logout</div>
  )
}
