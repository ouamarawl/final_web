import React from "react";
import "./Admin.css";
import "../product/data_product";
import data_product from "../product/data_product";
import { useState } from "react";
function Admin() {
  let [image, setimage] = useState("");
  let [discription, setdiscription] = useState("");
  let [titre, settitre] = useState("");
  let [prix, setprix] = useState("");
  const recherche = () => {
    let product = document.getElementById("search").value;

    for (let i = 0; i < data_product.length; i++) {
      if (data_product[i].title === product) {
        setimage(data_product[i].image);
        setdiscription(data_product[i].description);
        settitre(data_product[i].title);
        setprix(data_product[i].price);
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
