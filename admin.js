document.addEventListener("DOMContentLoaded", function () {
    let produits = JSON.parse(localStorage.getItem("produits")) || [];

    function afficherProduits() {
        const table = document.getElementById("produits-table");
        table.innerHTML = "";
    
        produits.forEach((produit, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${produit.nom}</td>
                <td>${produit.prix} €</td>
                <td>${produit.stock}</td>
                <td>
                    <button class="btn btn-warning btn-sm" onclick="modifierProduit(${index})">
                        <i class="fas fa-edit"></i> Modifier
                    </button>
                    <button class="btn btn-danger btn-sm" onclick="supprimerProduit(${index})">
                        <i class="fas fa-trash"></i> Supprimer
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
    }
    

        produits.forEach((produit, index) => {
            table.innerHTML += `
                <tr>
                    <td>${produit.nom}</td>
                    <td>${produit.prix} €</td>
                    <td>${produit.stock}</td>
                    <td>
                        <button class="btn btn-warning btn-sm" onclick="modifierProduit(${index})">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn btn-danger btn-sm" onclick="supprimerProduit(${index})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </td>
                </tr>
            `;
        });
    }

    document.getElementById("form-produit").addEventListener("submit", function (event) {
        event.preventDefault();
        const nom = document.getElementById("nom-produit").value;
        const prix = document.getElementById("prix-produit").value;
        const stock = document.getElementById("stock-produit").value;

        produits.push({ nom, prix, stock });
        localStorage.setItem("produits", JSON.stringify(produits));

        afficherProduits();
        this.reset();
    });

    window.supprimerProduit = function (index) {
        produits.splice(index, 1);
        localStorage.setItem("produits", JSON.stringify(produits));
        afficherProduits();
    };

    window.modifierProduit = function (index) {
        const produit = produits[index];
        const nouveauNom = prompt("Nom du produit :", produit.nom);
        const nouveauPrix = prompt("Prix du produit :", produit.prix);
        const nouveauStock = prompt("Stock du produit :", produit.stock);

        if (nouveauNom && nouveauPrix && nouveauStock) {
            produits[index] = { nom: nouveauNom, prix: nouveauPrix, stock: nouveauStock };
            localStorage.setItem("produits", JSON.stringify(produits));
            afficherProduits();
        }
    };

    afficherProduits();
});
