// Fonction pour charger un script dynamiquement
function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => resolve();
    script.onerror = () =>
      reject(new Error(`Erreur lors du chargement du script ${src}`));
    document.head.appendChild(script);
  });
}

// Charger tous les scripts dynamiquement
async function loadAllScripts() {
  try {
    await loadScript(
      "https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js"
    );
    await loadScript(
      "https://www.gstatic.com/firebasejs/8.10.0/firebase-firestore.js"
    );
    await loadScript("js/firebase.js");
    await loadScript("js/data.js");
    await loadScript("js/domBuilder.js");
    await loadScript("js/darkmode.js"); // Charger le script du dark mode

    // Une fois les scripts chargés, on peut initialiser l'application
    init();
  } catch (error) {
    console.error("Erreur lors du chargement des scripts :", error);
  }
}

// Fonction pour initialiser l'application
async function init() {
  try {
    const db = configureFirebase();
    const data = await fetchCVData(db);

    // Création des différentes sections du CV
    createPersonalInfoSection(data.cvData);
    createTechnicalSkillsSection(data.competenceData);
    createFunctionalSkillsSection(data.competenceFonctionnelleData);
    createFormationSection(data.formationData);
    createExperiencesSection(data.experienceData);
    createInterestsSection(data.centresInteretData);
    // Créer le bouton pour le Dark Mode
    createDarkModeButton();
    // Activer le Dark Mode après avoir chargé les sections
      setupDarkModeToggle();
      // Activer le drag and drop pour le conteneur de sections
      const cvContainer = document.querySelector(".cv-sections");
      enableDragAndDrop(cvContainer);
  } catch (error) {
    console.error("Erreur lors de l'initialisation :", error);
  }
}

// Charger les scripts lors du chargement de la page
loadAllScripts();
