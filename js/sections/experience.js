function createExperiencesSection(experienceData) {
    const ul = document.createElement("ul");
    Object.keys(experienceData).forEach((key) => {
        const experience = experienceData[key];
        const li = document.createElement("li");
        li.innerHTML = `<strong>${experience.dates_debut || ""} – ${experience.dates_fin || ""} : ${experience.poste} – ${experience.entreprise}</strong>`;
        const innerUl = document.createElement("ul");
        experience.description.forEach((desc) => {
            const subLi = document.createElement("li");
            subLi.textContent = desc;
            innerUl.appendChild(subLi);
        });
        li.appendChild(innerUl);
        ul.appendChild(li);
    });
    createSection("Expériences", ul, "experiences");
}
