document.addEventListener("DOMContentLoaded", function () {
    let total = localStorage.getItem("totalPanier") || 0;
    document.getElementById("total-paiement").textContent = total;

    document.getElementById("form-paiement").addEventListener("submit", function (event) {
        event.preventDefault();

        let nom = document.getElementById("nom").value;
        let email = document.getElementById("email").value;
        let adresse = document.getElementById("adresse").value;
        let carte = document.getElementById("carte").value;
        let expiration = document.getElementById("expiration").value;
        let cvv = document.getElementById("cvv").value;

        if (!nom || !email || !adresse || !carte || !expiration || !cvv) {
            alert("Veuillez remplir tous les champs !");
            return;
        }

        alert("Paiement validé avec succès ! Merci pour votre achat ❤️");

        // Vider le panier après le paiement
        localStorage.removeItem("panier");
        localStorage.removeItem("totalPanier");
        window.location.href = "index.html"; // Redirection vers l'accueil
    });
    document.addEventListener("DOMContentLoaded", function () {
        const formPaiement = document.getElementById("form-paiement");
    
        formPaiement.addEventListener("submit", function (event) {
            event.preventDefault(); // Empêche le rechargement de la page
    
            // Récupération des informations du formulaire
            const nom = document.getElementById("nom").value;
            const adresse = document.getElementById("adresse").value;
            const carte = document.getElementById("carte").value;
            const date = document.getElementById("date").value;
            const cvv = document.getElementById("cvv").value;
    
            // Simulation de l'envoi des données (ici on affiche juste une alerte)
            if (nom && adresse && carte && date && cvv) {
                alert(`Paiement confirmé !\nNom: ${nom}\nAdresse: ${adresse}\nCarte: ${carte}\nDate: ${date}\nCVV: ${cvv}`);
                // Vous pouvez ensuite vider le panier ou envoyer les données à un backend pour traitement réel
                localStorage.removeItem("panier"); // Vider le panier
                window.location.href = "confirmation.html"; // Redirection vers la page de confirmation
            } else {
                alert("Veuillez remplir tous les champs.");
            }
        });
    });
    
});
