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
  } catch (error) {
    console.error("Erreur lors de l'initialisation :", error);
  }
}

// Charger les données du CV lors du chargement de la page
init();
