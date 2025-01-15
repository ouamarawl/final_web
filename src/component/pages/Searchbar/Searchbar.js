import React from 'react'
import './Searchbar.css'
function Searchbar() {
  return (
    <div className='search_bar' >
       <h1 id='first_h1_3'>test for search_bar</h1>
        <div className='container_search_bar'>
        <div className='partie_de_recheres'>
         <input id='input' type="search" placeholder="search"/>
         <button><p id='text_btn'>Rechercher</p></button>
        </div> 
        <div className='partie_de_resultas'></div>
        </div>
    </div>
  )
}

export default Searchbar