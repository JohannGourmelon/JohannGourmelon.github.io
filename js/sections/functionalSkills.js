function createFunctionalSkillsSection(competenceFonctionnelleData) {
    const ul = document.createElement("ul");
    Object.keys(competenceFonctionnelleData).forEach((key) => {
        const competence = competenceFonctionnelleData[key];
        const li = document.createElement("li");
        li.innerHTML = `<strong>${competence.intitule || "Intitulé non disponible"} :</strong> ${competence.description || "Description non disponible"}`;
        ul.appendChild(li);
    });
    createSection("Compétences Fonctionnelles", ul, "functional-skills");
}
