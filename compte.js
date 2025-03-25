document.addEventListener("DOMContentLoaded", function () {
    const formInscription = document.getElementById("form-inscription");
    const formConnexion = document.getElementById("form-connexion");
    const messageInscription = document.getElementById("message-inscription");
    const messageConnexion = document.getElementById("message-connexion");

    // GESTION DE L'INSCRIPTION
    formInscription.addEventListener("submit", function (e) {
        e.preventDefault();
        const email = document.getElementById("inscription-email").value;
        const motDePasse = document.getElementById("inscription-motdepasse").value;

        if (email && motDePasse) {
            localStorage.setItem(email, motDePasse);
            messageInscription.textContent = "Inscription réussie ! Vous pouvez vous connecter.";
            messageInscription.classList.add("text-success");
            formInscription.reset();
        } else {
            messageInscription.textContent = "Veuillez remplir tous les champs.";
            messageInscription.classList.add("text-danger");
        }
    });

    // GESTION DE LA CONNEXION
    formConnexion.addEventListener("submit", function (e) {
        e.preventDefault();
        const email = document.getElementById("connexion-email").value;
        const motDePasse = document.getElementById("connexion-motdepasse").value;

        if (localStorage.getItem(email) === motDePasse) {
            messageConnexion.textContent = "Connexion réussie !";
            messageConnexion.classList.add("text-success");
            localStorage.setItem("utilisateurActuel", email); // Sauvegarde l'utilisateur connecté
            setTimeout(() => {
                window.location.href = "index.html"; // Redirige vers l'accueil après connexion
            }, 2000);
        } else {
            messageConnexion.textContent = "Email ou mot de passe incorrect.";
            messageConnexion.classList.add("text-danger");
        }
    });
});
