import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
function Header() {
  return (
    <div className='header'>
        <ul>
            <Link to='/' ><li>home</li></Link> 
            <Link to='Registre'><li>register</li></Link> 
            <Link to='Product'><li>product</li></Link> 
            <Link to= 'Searchbar'><li>search_bar</li></Link>    
            <Link to= 'admin-dashboard'><li>admin dashboard</li></Link>         
        </ul>
    </div>
  )
}

export default Header