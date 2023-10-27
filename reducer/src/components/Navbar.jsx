import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
        <h1>Reducer Lesson</h1>
        <div className='navbar-items'>
                <Link to="/login"><button className='navbar-btns'>Login</button></Link>
                <Link to="/signup"><button className='navbar-btns'>Sign up</button></Link>
        </div>
    </div>
  )
}

export default Navbar