document.addEventListener("DOMContentLoaded", function () {
    // Effet de défilement fluide
    const links = document.querySelectorAll("nav ul li a");
    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: "smooth" });
        });


    });

    // Validation du formulaire de contact
    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        
        if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
            alert("Veuillez remplir tous les champs.");
            return;
        }
        
        alert("Message envoyé avec succès !");
        form.reset();
    });
});
