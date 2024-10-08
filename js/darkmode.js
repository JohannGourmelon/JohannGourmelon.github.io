// Fonction pour basculer le mode sombre avec un curseur
function setupDarkModeToggle() {
  const toggleButton = document.getElementById("toggle-darkmode");

  // Vérifier si le bouton existe
  if (!toggleButton) {
    console.error("Le bouton du Dark Mode n'a pas été trouvé.");
    return;
  }

  // Vérifier l'état actuel du Dark Mode
  if (localStorage.getItem("dark-mode") === "enabled") {
    document.body.classList.add("dark-mode");
    toggleButton.classList.add("active");
  }

  // Ajouter un événement pour basculer le mode
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
