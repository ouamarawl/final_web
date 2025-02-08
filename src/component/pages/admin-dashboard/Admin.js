import React, { useState, useEffect } from "react";
import "./Admin.css";

function Admin() {
  const [produits, setProduits] = useState([]);
  const [image, setImage] = useState("");
  const [discription, setDiscription] = useState("");
  const [titre, setTitre] = useState("");
  const [prix, setPrix] = useState("");
  const [id, setId] = useState(""); // Ajouter un état pour l'ID

  // Fonction pour récupérer les produits depuis l'API
  useEffect(() => {
    fetch("http://localhost:8080/api/produits")
      .then((response) => response.json())
      .then((data) => {
        setProduits(data);
      })
      .catch((error) => console.error("Erreur de chargement :", error));
  }, []);

  const recherche = () => {
    let product = document.getElementById("search").value;
    for (let i = 0; i < produits.length; i++) {
      if (produits[i].titre === product) {
        setImage(produits[i].image);
        setDiscription(produits[i].description);
        setTitre(produits[i].titre);
        setPrix(produits[i].prix);
        setId(produits[i].id);
      }
    }
  };

  const ajouter = () => {
    const produitData = {
      titre: titre,
      description: discription,
      prix: prix,
      image: image,
    };
  
    fetch("http://localhost:8080/api/produits", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(produitData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Produit ajouté avec succès:", data);
        setProduits([...produits, produitData]);
        alert("✅ Produit ajouté avec succès !");
      })
      .catch((error) => {
        console.error("Erreur d'ajout de produit:", error);
        alert("❌ Erreur lors de l'ajout du produit !");
      });
  };
  
  const supprimer = () => {
    const idInput = document.getElementById("id");
    if (!idInput) {
      console.error("L'élément ID est introuvable !");
      alert("⚠️ L'élément ID est introuvable !");
      return;
    }
    const id = idInput.value;
  
    fetch(`http://localhost:8080/api/produits/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Produit supprimé avec succès:", data);
        setProduits(produits.filter((produit) => produit.id !== id));
        alert("🗑️ Produit supprimé avec succès !");
      })
      .catch((error) => {
        console.error("Erreur de suppression de produit:", error);
        alert("❌ Erreur lors de la suppression du produit !");
      });
  };
  
  const modifier = () => {
    const idInput = document.getElementById("id");
    if (!idInput) {
      console.error("L'élément ID est introuvable !");
      alert("⚠️ L'élément ID est introuvable !");
      return;
    }
    const id = idInput.value;
  
    const produitData = {
      titre: titre,
      description: discription,
      prix: prix,
      image: image,
    };
  
    fetch(`http://localhost:8080/api/produits/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(produitData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Produit modifié avec succès:", data);
        setProduits(
          produits.map((produit) =>
            produit.id === id ? { ...produit, ...produitData } : produit
          )
        );
        alert("✏️ Produit modifié avec succès !");
      })
      .catch((error) => {
        console.error("Erreur de modification de produit:", error);
        alert("❌ Erreur lors de la modification du produit !");
      });
  };
  

  return (
    <div className="admin-dashboard">
      <div className="container-card-admin">
        <div className="search-bar-2">
          <input id="search" type="search" />
          <button id="search" onClick={recherche}>
            Search
          </button>
        </div>

        <form className="inputs" method="post">
          <input
            type="file"
            id="imageUpload"
            name="image"
            accept="image/*"
            onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
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
            onChange={(e) => setDiscription(e.target.value)}
          />
          <input
            id="titre"
            placeholder="Titre"
            type="text"
            value={titre}
            onChange={(e) => setTitre(e.target.value)}
          />
          <input
            id="prix"
            placeholder="Prix"
            type="price"
            value={prix}
            onChange={(e) => setPrix(e.target.value)}
          />
          <input
            id="id"
            type="hidden" // Champ caché pour l'ID du produit
            value={id}
            readOnly
          />
        </form>

        <div className="buttons">
          <button type="button" id="ajouter" onClick={ajouter}>
            Ajouter
          </button>
          <button type="button" id="modifier" onClick={modifier}>
            Modifier
          </button>
          <button type="button" id="supprimer" onClick={supprimer}>
            Supprimer
          </button>
        </div>
      </div>
    </div>
  );
}

export default Admin;
