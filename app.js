(function () {
    // Control de botones
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        });
    });

    // Cambio de tema y de imagen
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");

        // Cambiar la imagen
        const logoImg = document.getElementById("logo-img");
        if (document.body.classList.contains("light-mode")) {
            logoImg.src = "img/logos/Logo_black.png"; // Ruta de la imagen para el modo claro
        } else {
            logoImg.src = "img/logos/Logo_light.png"; // Ruta de la imagen para el modo oscuro
        }
    });
})();
