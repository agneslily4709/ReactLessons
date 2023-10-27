import React from 'react'

const Login = () => {
  return (
    <div className='container'>
        <form className='container-form'>
                <h2 className='form-header'>Login Form</h2>
                <label>Email</label>
                <input className='form-input' type='email' placeholder='Enter Email'/>
                <label>Password</label>
                <input className='form-input' type='password' placeholder='Enter Password'/>
                <button className='btn'>Login</button>
        </form>
    </div>
  )
}

export default Login