// Fonction pour mettre la première lettre en minuscule
function lowercaseFirstLetter(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
}

function createFunctionalSkillsSection(competenceFonctionnelleData) {
    const ul = document.createElement("ul");
    Object.keys(competenceFonctionnelleData).forEach((key) => {
        const competence = competenceFonctionnelleData[key];

        // Traitement des descriptions avec mise en minuscule des éléments suivants
        const description = Array.isArray(competence.description)
            ? competence.description.map((desc, index) =>
                index === 0 ? desc : lowercaseFirstLetter(desc)
            ).join(", ")
            : competence.description || "Description non disponible";

        const li = document.createElement("li");
        li.innerHTML = `<strong>${competence.intitule || "Intitulé non disponible"} :</strong> ${description}`;
        ul.appendChild(li);
    });
    createSection("Compétences Fonctionnelles", ul, "functional-skills");
}
