document.addEventListener("DOMContentLoaded", function() {
    function afficherMessage() {
        alert("Bonjour ! Bienvenue sur mon site web.");
    }

    document.querySelector("button").addEventListener("click", afficherMessage);
});

