function setupDarkModeToggle() {
    createDarkModeButton();
    const toggleButton = document.getElementById("toggle-darkmode");

    if (!toggleButton) {
        console.error("Le bouton du Dark Mode n'a pas été trouvé.");
        return;
    }

    if (localStorage.getItem("dark-mode") === "enabled") {
        document.body.classList.add("dark-mode");
        toggleButton.classList.add("active");
    }

    toggleButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        toggleButton.classList.toggle("active");
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
        } else {
            localStorage.setItem("dark-mode", "disabled");
        }
    });
}

function createDarkModeButton() {
    const button = document.createElement("div");
    button.id = "toggle-darkmode";
    button.classList.add("toggle-darkmode");

    const container = document.querySelector(".container");
    container.insertBefore(button, container.firstChild);
}
