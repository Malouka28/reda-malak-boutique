document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");
    const content = document.querySelector(".content");
    const btnSidebarToggle = document.getElementById("btn-sidebar-toggle");

    // Afficher ou masquer la sidebar lorsque le bouton est cliqué
    btnSidebarToggle.addEventListener("click", function () {
        sidebar.classList.toggle("open");
        content.classList.toggle("open");
    });
     // Vérifie si l'utilisateur est connecté
     const userLogged = JSON.parse(localStorage.getItem("userLogged"));
     if (userLogged) {
         btnDeconnexion.style.display = "block";
         btnDeconnexion.addEventListener("click", function () {
             localStorage.removeItem("userLogged");
             alert("Déconnexion réussie !");
             window.location.href = "connexion.html";
         });
     }
});