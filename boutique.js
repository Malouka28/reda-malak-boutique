document.addEventListener("DOMContentLoaded", function () {
    const produits = [
        { id: 1, nom: "T-shirt Amour", prix: 25, image: "images/tshirt.jpg", description: "T-shirt doux et confortable." },
        { id: 2, nom: "Montre Élégante", prix: 50, image: "images/montre.jpg", description: "Montre moderne en acier inoxydable." },
        { id: 3, nom: "Sac à Main", prix: 75, image: "images/sac.jpg", description: "Sac en cuir pour un look chic." },
        // Ajouter plus de produits ici...
    ];

    afficherProduits(produits);

    function afficherProduits(produits) {
        const produitsList = document.getElementById("produits-list");

        produits.forEach((produit) => {
            const card = document.createElement("div");
            card.className = "col-md-4 mb-4";
            card.innerHTML = `
                <div class="card shadow-sm">
                    <img src="${produit.image}" class="card-img-top" alt="${produit.nom}">
                    <div class="card-body">
                        <h5 class="card-title">${produit.nom}</h5>
                        <p class="card-text">${produit.description}</p>
                        <p class="card-text">${produit.prix} €</p>
                        <button class="btn btn-primary" onclick="ajouterAuPanier(${produit.id})">
                            <i class="fas fa-cart-plus"></i> Ajouter au panier
                        </button>
                    </div>
                </div>
            `;
            produitsList.appendChild(card);
        });
    }

    window.ajouterAuPanier = function (idProduit) {
        const produit = produits.find((p) => p.id === idProduit);
        let panier = JSON.parse(localStorage.getItem("panier")) || [];

        const produitDansPanier = panier.find((p) => p.id === idProduit);
        if (produitDansPanier) {
            produitDansPanier.quantite++;
        } else {
            panier.push({ ...produit, quantite: 1 });
        }

        localStorage.setItem("panier", JSON.stringify(panier));
        alert(`${produit.nom} a été ajouté à votre panier !`);
    };
});
