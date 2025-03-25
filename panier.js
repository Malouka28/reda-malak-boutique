document.addEventListener("DOMContentLoaded", function () {
    let panier = JSON.parse(localStorage.getItem("panier")) || [];
    afficherPanier();

    function afficherPanier() {
        const table = document.getElementById("panier-table");
        table.innerHTML = "";
        let totalPrix = 0;

        panier.forEach((produit, index) => {
            const total = produit.prix * produit.quantite;
            totalPrix += total;

            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${produit.nom}</td>
                <td>${produit.prix} €</td>
                <td>
                    <button class="btn btn-sm btn-outline-secondary" onclick="changerQuantite(${index}, -1)">-</button>
                    ${produit.quantite}
                    <button class="btn btn-sm btn-outline-secondary" onclick="changerQuantite(${index}, 1)">+</button>
                </td>
                <td>${total} €</td>
                <td>
                    <button class="btn btn-danger btn-sm" onclick="supprimerDuPanier(${index})">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
            `;
            row.style.opacity = "0";
            row.style.transform = "translateY(-10px)";
            table.appendChild(row);

            setTimeout(() => {
                row.style.opacity = "1";
                row.style.transform = "translateY(0)";
                row.style.transition = "all 0.3s ease-in-out";
            }, 100);
        });

        document.getElementById("total-prix").textContent = totalPrix;
    }

    window.changerQuantite = function (index, delta) {
        if (panier[index].quantite + delta > 0) {
            panier[index].quantite += delta;
        } else {
            panier.splice(index, 1);
        }
        localStorage.setItem("panier", JSON.stringify(panier));
        afficherPanier();
    };

    window.supprimerDuPanier = function (index) {
        panier.splice(index, 1);
        localStorage.setItem("panier", JSON.stringify(panier));
        afficherPanier();
    };

    window.validerCommande = function () {
        alert("Commande validée !");
        localStorage.removeItem("panier");
        afficherPanier();
    };
});
