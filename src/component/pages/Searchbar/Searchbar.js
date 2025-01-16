import React from 'react';
import './Searchbar.css';
import data_product from '../product/data_product';
import Fuse from 'fuse.js';

function Searchbar() {
  const search = () => {
    const Recherche = document.getElementById('input').value.trim(); 
    const Resultas = document.getElementById('partie_de_resultas');
    Resultas.innerHTML = ""; 

    // Configuration de Fuse.js
    const options = {
      keys: ['title'], // Rechercher uniquement dans les titres des produits
      threshold: 0.4, // Tolérance pour les fautes (0 : strict, 1 : très tolérant)
    };

    const fuse = new Fuse(data_product, options);
    const resultats = fuse.search(Recherche); 

    if (resultats.length > 0) {
      resultats.forEach(({ item }) => {
      
        const productCard = document.createElement('div');
        productCard.innerHTML = `
          <div class="container_card">
            <h3>${item.title}</h3>
            <img src="${item.image}" alt="${item.title}">
            <p>${item.description}</p>
            <p>Prix : ${item.price} €</p>
          </div>
        `;
        Resultas.appendChild(productCard);
      });
    } else {
      Resultas.textContent = "Aucun résultat trouvé pour cette recherche.";
    }
  };
  return (
    <div className='search_bar' >
       <h1 id='first_h1_3'>test for search bar</h1>
        <div className='container_search_bar'>
        <div className='partie_de_recheres'>
         <input id='input' type="search" placeholder="search"/>
         <button onClick={search}><p id='text_btn'>Rechercher</p></button>
        </div> 
        <div className='partie_de_resultas' id='partie_de_resultas'>
          
        </div>
        </div>
    </div>
  )
}

export default Searchbar