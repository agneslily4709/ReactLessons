import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
        const [user,setUser] = useState({email:"",password:""})
        const navigate = useNavigate()
        const handleSubmit = (e) => {
                e.preventDefault()
                navigate("/login")
                // localStorage.clear()
        }
        const handleInputChange = (e) => {
                setUser({...user,[e.target.name]:e.target.value})
        }
  return (
    <div className='container'>
                <form className='container-form'>
                <h2 className='form-header'>Signup Form</h2>
                <label>Name</label>
                <input className='form-input' name='name' type='text' placeholder='Enter Name' onChange={handleInputChange}/>
                <label>Email</label>
                <input className='form-input' name='email' type='email' placeholder='Enter Email' onChange={handleInputChange}/>
                <label>Password</label>
                <input className='form-input' name='password' type='password' placeholder='Enter Password' onChange={handleInputChange}/>
                <button className='btn' onClick={handleSubmit}>Signup</button>
        </form>
    </div>
  )
}

export default Signup