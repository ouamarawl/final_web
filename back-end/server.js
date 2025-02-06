const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors()); // Pour éviter les problèmes CORS avec React

// Configuration de la base de données
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "produits",
});

// Connexion à MySQL
db.connect((err) => {
    if (err) {
        console.error("Erreur de connexion à la base de données:", err);
    } else {
        console.log("Connecté à MySQL !");
    }
});

// Route pour récupérer tous les produits
app.get("/api/produits", (req, res) => {
    db.query("SELECT * FROM produits", (err, result) => {
        if (err) {
            res.status(500).json({ message: "Erreur serveur" });
        } else {
            res.status(200).json(result);
        }
    });
});

// Route pour ajouter un produit
app.post("/api/produits", (req, res) => {
    const { titre, description, prix, image } = req.body;
    db.query(
        "INSERT INTO produits (titre, description, prix, image) VALUES (?, ?, ?, ?)",
        [titre, description, prix, image],
        (err, result) => {
            if (err) {
                res.status(500).json({ message: "Erreur serveur" });
            } else {
                res.status(201).json({ message: "Produit ajouté !" });
            }
        }
    );
});

// Route pour supprimer un produit
app.delete("/api/produits/:id", (req, res) => {
    const { id } = req.params;
    db.query("DELETE FROM produits WHERE id = ?", [id], (err, result) => {
        if (err) {
            res.status(500).json({ message: "Erreur serveur" });
        } else {
            res.status(200).json({ message: "Produit supprimé !" });
        }
    });
});

// Lancer le serveur
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
