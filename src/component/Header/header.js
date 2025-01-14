import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
function Header() {
  return (
    <div className='header'>
        <ul>
            <Link to='/' ><li>home</li></Link> 
            <Link to='Registre'><li>registre</li></Link> 
            <Link to='Product'><li>product</li></Link> 
            <Link to= 'Searchbar'><li>searchbar</li></Link>          
        </ul>
    </div>
  )
}

export default Header