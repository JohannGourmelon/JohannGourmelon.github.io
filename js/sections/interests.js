function createInterestsSection(centresInteretData) {
    const ul = document.createElement("ul");
    Object.keys(centresInteretData).forEach((key) => {
        const centre = centresInteretData[key];
        const li = document.createElement("li");
        li.textContent = `${centre.titre} : ${centre.description}`;
        ul.appendChild(li);
    });
    createSection("Centres d'intérêt", ul, "interests");
}
