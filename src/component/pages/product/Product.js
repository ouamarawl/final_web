import  { useEffect, useState } from "react";
import "./Product.css";
import Cards_product from "./Cards_product";

function Product() {
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
  

  return (
    <div className="produit">
      <h1 id="first_h1_2">Test for product list</h1>
      <div className="container-product">
        {produits.map((currentValue, index) => (
          <Cards_product
            key={index}
            title={currentValue.titre}
            images={currentValue.image}
            description={currentValue.description}
            price={currentValue.prix}
          />
        ))}
      </div>
    </div>
  );
}

export default Product;
