import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import userReducer from '../reducer/authReducer'
import { UserContext } from '../context/userContext'
const Navbar = () => {
        const {authState,dispatch} = useContext(UserContext)
        console.log(authState)
  return (
    <div className='navbar'>
        <h1>Reducer Lesson</h1>
        <div className='navbar-items'>
        {authState.isLoggedIn?
        <>
                <Link to="/profile"><button className='navbar-btns'>Profile</button></Link>
                <Link to="/logout"><button className='navbar-btns'>Logout</button></Link>
        </>
        :
        <>
                <Link to="/login"><button className='navbar-btns'>Login</button></Link>
                <Link to="/signup"><button className='navbar-btns'>Sign up</button></Link>
        </>
        }
        </div>
    </div>
  )
}

export default Navbar