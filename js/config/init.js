function init() {
    const db = configureFirebase();
    fetchCVData(db).then(data => {
        createPersonalInfoSection(data.cvData);
        createTechnicalSkillsSection(data.competenceData);
        createFunctionalSkillsSection(data.competenceFonctionnelleData);
        createFormationSection(data.formationData);
        createExperiencesSection(data.experienceData);
        createInterestsSection(data.centresInteretData);

        setupDarkModeToggle();
        setupDragAndDrop();
    });
}
