document.addEventListener("DOMContentLoaded", function () {

    // GESTION DE L'INSCRIPTION
    const formInscription = document.getElementById("form-inscription");
    if (formInscription) {
        formInscription.addEventListener("submit", function (event) {
            event.preventDefault();
            
            const username = document.getElementById("username").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            // Vérifier si l'email existe déjà
            let users = JSON.parse(localStorage.getItem("users")) || [];
            if (users.some(user => user.email === email)) {
                alert("Cet email est déjà utilisé !");
                return;
            }

            // Enregistrement du nouvel utilisateur
            users.push({ username, email, password });
            localStorage.setItem("users", JSON.stringify(users));

            alert("Inscription réussie !");
            window.location.href = "connexion.html"; // Redirection vers la connexion
        });
    }

    // GESTION DE LA CONNEXION
    const formConnexion = document.getElementById("form-connexion");
    if (formConnexion) {
        formConnexion.addEventListener("submit", function (event) {
            event.preventDefault();

            const email = document.getElementById("login-email").value;
            const password = document.getElementById("login-password").value;

            let users = JSON.parse(localStorage.getItem("users")) || [];
            const user = users.find(user => user.email === email && user.password === password);

            if (user) {
                alert("Connexion réussie !");
                localStorage.setItem("userLogged", JSON.stringify(user));
                window.location.href = "index.html"; // Redirection vers l'accueil
            } else {
                alert("Email ou mot de passe incorrect !");
            }
        });
    }
});
