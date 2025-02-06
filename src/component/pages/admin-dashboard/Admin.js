import React from "react";
import "./Admin.css";
import "../product/data_product";
import data_product from "../product/data_product";
import { useState,useEffect } from "react";
function Admin() {
  const [produits, setProduits] = useState([]);
    
      // Fonction pour récupérer les produits depuis l'API
      useEffect(() => {
        fetch("http://localhost:8080/api/produits")
          .then((response) => response.json())
          .then((data) => {
            console.log("Produits chargés :", data);
            setProduits(data);
          })
          .catch((error) => console.error("Erreur de chargement :", error));
      }, []); 
     
  let [image, setimage] = useState("");
  let [discription, setdiscription] = useState("");
  let [titre, settitre] = useState("");
  let [prix, setprix] = useState("");
  const recherche = () => {
    let product = document.getElementById("search").value;

    for (let i = 0; i < produits.length; i++) {
      if (produits[i].titre === product) {
        setimage(produits[i].image);
        setdiscription(produits[i].description);
        settitre(produits[i].titre);
        setprix(produits[i].prix);
      }
    }
  
  };
  return (
    <div className="admin-dashboard">
      <div className="container-card-admin">
        <div className="search-bar-2">
          <input id="search" type="search" />
          <button id="search" onClick={recherche}>
            search
          </button>
        </div>
        <div className="inputs">
        <input
            type="file"
            id="imageUpload"
            name="image"
            accept="image/*"
            onChange={(e) => setimage(URL.createObjectURL(e.target.files[0]))} // Modification: On utilise onChange pour gérer l'upload de fichier et afficher l'image
          />
           {image && (
  <img
    src={image}
    alt="Aperçu"
    style={{
      width: "100px",
      height: "100px",
      objectFit: "cover",
      marginTop: "10px",
      borderRadius: "5px",
    }}
  />
)}
          <input
            id="discription"
            placeholder="Description"
            type="text"
            value={discription}
            onChange={(e) => setdiscription(e.target.value)}
          />
          <input
            id="titre"
            placeholder="Titre"
            type="text"
            value={titre}
            onChange={(e) => settitre(e.target.value)}
          />
          <input
            id="prix"
            placeholder="Prix"
            type="price"
            value={prix}
            onChange={(e) => setprix(e.target.value)}
          />
        </div>

        <div className="buttons">
          <button id="ajouter">ajouter</button>
          <button id="modifier">modifier</button>
          <button id="supprimer">suprimer</button>
        </div>
      </div>
    </div>
  );
}

export default Admin;
