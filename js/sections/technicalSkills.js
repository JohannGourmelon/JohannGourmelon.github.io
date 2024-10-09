function createTechnicalSkillsSection(competenceData) {
    const ul = document.createElement("ul");
    Object.keys(competenceData).forEach((key) => {
        const competence = competenceData[key];
        const li = document.createElement("li");
        li.innerHTML = `<strong>${competence.intitule || "Intitulé non disponible"} :</strong>`;
        if (Array.isArray(competence.description) && typeof competence.description[0] === "object") {
            const innerUl = document.createElement("ul");
            competence.description.forEach((item) => {
                const subLi = document.createElement("li");
                const subKey = Object.keys(item)[0];
                subLi.textContent = `${subKey} : ${item[subKey]}`;
                innerUl.appendChild(subLi);
            });
            li.appendChild(innerUl);
        } else {
            li.innerHTML += ` ${competence.description || "Description non disponible"}`;
        }
        ul.appendChild(li);
    });
    createSection("Compétences Techniques", ul, "technical-skills");
}
