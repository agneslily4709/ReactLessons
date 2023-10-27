import React, { useState } from 'react'

const Login = () => {
        const [user,setUser] = useState({email:"",password:""})
        const handleSubmit = (e) => {
                e.preventDefault()
                localStorage.setItem("user",JSON.stringify(user))
                // localStorage.clear()
        }
        const handleInputChange = (e) => {
                setUser({...user,[e.target.name]:e.target.value})
        }
  return (
    <div className='container'>
        <form className='container-form'>
                <h2 className='form-header'>Login Form</h2>
                <label>Email</label>
                <input className='form-input' name='email' type='email' placeholder='Enter Email' onChange={handleInputChange}/>
                <label>Password</label>
                <input className='form-input' name='password' type='password' placeholder='Enter Password' onChange={handleInputChange}/>
                <button className='btn' onClick={handleSubmit}>Login</button>
        </form>
    </div>
  )
}

export default Login